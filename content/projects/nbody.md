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

Stellar dynamics, especially in the realm of young binary and multiple star systems, often seem more like the stuff of sci-fi than reality. Yet these dynamics dictate the cosmic dance that stars partake in, and understanding them holds the key to unlocking many secrets of our universe. To delve into this complex web, I recently completed my third year Astrophysics BSc project on gravitational **N-body simulations**—a computational method used to predict the individual motions of a group of celestial objects interacting with each other gravitationally.

The project had a twofold aim: first, to construct and validate an N-body simulator capable of accurately modelling the dynamical evolution of small-N systems; and second, to use this simulator to investigate the profound influence of initial conditions on star ejection patterns, binary formation, and the overall evolution of these systems.

In this post, I will share the programmatic and analytical approaches that I adopted to bring this project to fruition. But first, a brief primer on gravitational N-body simulations.

## Gravitational N-body Simulations

As the name suggests, an N-body simulation calculates the interaction of N number of objects in a system, where each object influences every other object. In our case, these objects are celestial bodies—stars. The gravitational N-body problem attempts to predict the motion of these stars based on Newton's laws of motion and universal gravitation.

::terminal
```python
def calculate_gravitational_force(m1, m2, r):
    G = 6.67430e-11  # gravitational constant in m^3 kg^-1 s^-2
    return G * m1 * m2 / r**2
```
::

*Snippet: Simple Python function to calculate the gravitational force between two bodies.*

Sounds simple enough, right? But when we're dealing with systems that can contain upwards of hundreds of thousands of stars, things can get a bit tricky.

In the following sections, I'll share more about the design and implementation of the N-body simulator, the testing and validation phase, the intriguing results we discovered, and the insights we gleaned from them. 

Sounds simple enough, right? But when we're dealing with systems that can contain upwards of hundreds of thousands of stars, things can get a bit tricky.

In the following sections, I'll share more about the design and implementation of the N-body simulator, the testing and validation phase, the intriguing results we discovered, and the insights we gleaned from them. 