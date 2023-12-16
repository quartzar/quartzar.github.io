---
title: 'N-body Modelling of Young Stellar Systems'
head: 'hi'
description: 'Harnessing the power of C++ and CUDA, I modeled the cosmic dance of young stars for my final year Astrophysics project, unveiling the gravitational mysteries of stellar cores through dynamic N-body simulations.'
subtitle: 'Journey through the stages of my final year Astrophysics project.'
date: '2023-06-23'
tag: 'C++ | CUDA'
layout: 'project'
---

## Intro

Stellar dynamics, especially in the realm of young binary and multiple star systems, often seem more like the stuff of sci-fi than reality. Yet these dynamics dictate the cosmic dance that stars partake in, and understanding them holds the key to unlocking many secrets of our universe. 

To delve into this complex web, I recently completed my third year Astrophysics BSc project where I investigated the formation and evolution of young stellar systems. To do this, I needed to develop a gravitational **N-body simulation**—a computational method used to predict the individual motions of a group of celestial objects interacting with each other gravitationally.

The project had a twofold aim: 
1. Construct and validate an N-body simulator capable of accurately modelling the dynamical evolution of small-N systems, 
2. Use this simulator to investigate the profound influence of initial conditions on star ejection patterns, binary formation, and the overall evolution of these systems.

In this post, I will share the programmatic and analytical approaches that I adopted to bring this project to fruition. But first, a brief primer on N-body simulations.

### What are N-body Simulations?

In physics, the [N-body problem](https://en.wikipedia.org/wiki/N-body_problem) involves attempting to predict the motion of multiple celestial objects, or '*bodies*', that are interacting with each other *gravitationally*. For a system of two bodies, there exists a clear-cut solution, and even for the three-body problem, a solution can be found in its restricted form, which essentially involves two bodies and a third one of negligible mass. However, for systems with four or more bodies, no general analytical solution exists...

However, thanks to advancements in computational power and algorithms, we are not left helpless in the face of this challenge. Enter [**N-body simulations**](https://en.wikipedia.org/wiki/N-body_simulation), a powerful computational tool that provides a numerical solution to this problem. These simulations can handle the dynamical interactions of *N* number of objects or *bodies* in a system, where each object influences every other. In our context, these 'bodies' refer to protostellar stars whose interactions are governed by gravitational forces. 

## The Physics

N-body simulations generally involve the following steps:

1. **Initialisation**: The initial conditions of the system are defined, including the number of bodies, their masses, positions, velocities, and other relevant parameters.
2. **Force Calculations**: The forces between each pair of bodies are calculated.
3. **Integration**: The equations of motion are integrated to determine the new positions and velocities of the bodies.
4. **Analysis**: The results are analysed to glean insights into the system's evolution.

While **initialisation** and **analysis** are relatively self-explanatory, the **force calculations** and **integration** steps are where things get interesting. There are a number of different algorithms that can be used to compute the pair-wise forces between the bodies, each with their own advantages and disadvantages. 

Let's first take a look at a simple example of the equations of motion for a system of two bodies. Under Newtonian gravity, the force between two bodies is given by:

$$
\mathbf{F} = -G \cdot \frac{m_1 m_2}{r^2} \, \hat{\mathbf{r}},
$$

where $G$ is the gravitational constant, $m_1$ and $m_2$ are the masses of the two bodies, $r$ is the distance between them, and $\hat{\mathbf{r}}$ is the unit vector pointing from the first body to the second. Seems simple enough, right?

Before we adapt this equation to a system of *N* bodies, let's first think about how we could implement this in code for a system of 10 bodies. Logically, we would need to do the following:

1. For each body, loop through every other body in the system to calculate the force between them.
2. Sum the forces between each pair of bodies to get the total acceleration of each body.

This is known as a **pairwise force calculation** - and it get's really, *really* slow as the number of bodies, *N*, increases - with a computational complexity of $O(N^2)$. Adapting the above equation for a system of *N* bodies, we can simply sum the forces between each pair of bodies:

$$
\mathbf{F}_i = G m_{i} \cdot  \sum_{\substack{1\le j\le N \\ j \neq i}}^{N} \frac{ m_j}{r_{ij}^2} \, \hat{\mathbf{r}}_{ij},
$$

where $i$ and $j$ are indices for the bodies, and $r_{ij}$ and $\hat{\mathbf{r}}_{ij}$ are the distance and unit vector between bodies $i$ and $j$ respectively. In code, this would look something like this:

::terminal{title="Pairwise Force Calculation"}
```cpp
for (int i = 0; i < N; i++) 
{
    float acceleration_i = 0.f;

    for (int j = 0; j < N; j++) 
    {
        // We don't want to calculate the force between a body and itself
        if (i == j) continue;

        // Calculate the distance vector between the bodies
        float3 r_ij = positions[j] - positions[i];

        // Calculate the magnitude of the distance vector
        float r_squared = r_ij.x * r_ij.x + r_ij.y * r_ij.y + r_ij.z * r_ij.z;

        // Calculate the unit vector pointing from body i to body j
        float3 r_hat = r_ij / sqrtf(r_squared);

        // Calculate the force between the bodies
        float force_ij = -G * masses[j] / r_squared;

        // Add the force to the total acceleration of body i
        acceleration_i += force_ij * r_hat;
    }
    return acceleration_i;
}
```
::

*Snippet: Simplified C++ function to calculate the gravitational force between bodies.*


There is, however, an issue... 

As the bodies approach each other, the force between them *grows without bounds*, and the simulation becomes unstable. To remedy this, we can introduce a **softening parameter**, $\epsilon$, which acts as a cut-off distance for the force calculation. 

Skipping a few boring derivations (and including a nifty little trick that requires less FLOPS when running on a GPU... more on that later), we can write the force calculation for a system of *N* bodies as:

$$
    \mathbf{a}_i\approx -G \sum_{1\leq j\leq N}\frac{m_{j}\mathbf{r}_{ij}}{(\|\mathbf{r}_{ij}\|^2+\epsilon^2)^{\frac{3}{2}}},
$$

where $\mathbf{a}_i$ is the acceleration of body $i$, $\mathbf{r}_{ij}$ is the distance vector between bodies $i$ and $j$, and $\epsilon$ is the softening parameter. Notice that $m_i$ is not required anymore, as $\mathbf{a}_i=\mathbf{F}_i/m_i$. Let's take a look at how this would look programatically:

::terminal{title="CPU Force Calculation"}
```cpp
void bodyBodyInteraction(float4* pos, float4* acc, int N)
{
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            if (i == j)
                continue;
            
            float3 r;
    
            // r_ij -> AU [distance]
            r.x = pos[j].x - pos[i].x;
            r.y = pos[j].y - pos[i].y;
            r.z = pos[j].z - pos[i].z;
    
            // distance squared == dot(r_ij, r_ij) + softening^2
            float distSqr = r.x * r.x + r.y * r.y + r.z * r.z;
            distSqr += SOFTENING * SOFTENING;
    
            // inverse distance cubed == 1 / distSqr^(3/2) [fastest method]
            float distSixth = distSqr * distSqr * distSqr;
            float invDistCube = 1.0f / sqrtf(distSixth);
    
            // force = mass_j * inverse distance cube
            float f = pos[j].w * invDistCube;
    
            // acceleration = acceleration_i + force * r_ij
            force[i].x += r.x * f * (float)BIG_G;
            force[i].y += r.y * f * (float)BIG_G;
            force[i].z += r.z * f * (float)BIG_G;
        }
    }
}
```
::








