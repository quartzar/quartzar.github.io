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

## What are N-body Simulations?

In physics, the [N-body problem](https://en.wikipedia.org/wiki/N-body_problem) involves attempting to predict the motion of multiple celestial objects, or '*bodies*', that are interacting with each other *gravitationally*. There exists a solution for the two-body problem, and even for the three-body problem (though only for the 'restricted' form, which essentially still describes a two-body system, with an extra body of negligible mass). However, for systems with four or more bodies, no general analytical solution exists...


Thankfully, we now have the ability to accurately simulate computational solutions to the N-body problem—N-body simulations. calculates the interaction of *N* number of objects or *bodies* in a system, where each object influences every other object. In our case, these objects are celestial bodies - stars. The gravitational N-body problem attempts to predict the motion of these stars based on Newton's laws of motion and universal gravitation.

::terminal{title="Python"}
```python
def calculate_gravitational_force(m1, m2, r):
    G = 6.67430e-11  # gravitational constant in m^3 kg^-1 s^-2
    return G * m1 * m2 / r**2
```
::

*Snippet: Simple Python function to calculate the gravitational force between two bodies.*

Sounds simple enough, right? But when we're dealing with systems that can contain upwards of hundreds of thousands of stars, things can get a bit tricky.

In the following sections, I'll share more about the design and implementation of the N-body simulator, the testing and validation phase, the intriguing results we discovered, and the insights we gleaned from them. 

