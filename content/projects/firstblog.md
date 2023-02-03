---
navTitle: 'hi'
---

# Welcome

This is a test project page.

Here is how you could write an N-body simulation in C++:

```cpp
#include <iostream>
#include <vector>
#include <cmath>
#include <fstream>
#include <string>
#include <sstream>
#include <iomanip>
#include <algorithm>

using namespace std;

struct Body {
    double x, y, z, vx, vy, vz, mass;
};

double G = 6.67408e-11;

double distance(Body a, Body b) {
    return sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2) + pow(a.z - b.z, 2));
}

double force(Body a, Body b) {
    return G * a.mass * b.mass / pow(distance(a, b), 2);
}

double forceX(Body a, Body b) {
    return force(a, b) * (b.x - a.x) / distance(a, b);
}

double forceY(Body a, Body b) {
    return force(a, b) * (b.y - a.y) / distance(a, b);
}

double forceZ(Body a, Body b) {
    return force(a, b) * (b.z - a.z) / distance(a, b);
}
```


