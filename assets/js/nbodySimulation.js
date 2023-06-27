class Particle {
    constructor(x, y, mass, radius, color) {
      this.x = x;
      this.y = y;
      this.mass = mass;
      this.radius = radius;
      this.color = color;
      this.vx = 0;
      this.vy = 0;
    }
  
    applyForce(fx, fy) {
      this.vx += fx / this.mass;
      this.vy += fy / this.mass;
    }
  
    update(dt) {
      this.x += this.vx * dt;
      this.y += this.vy * dt;
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  
  function applyGravity(p1, p2, G) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const force = G * p1.mass * p2.mass / (distance * distance);
  
    const fx = (force * dx) / distance;
    const fy = (force * dy) / distance;
  
    p1.applyForce(fx, fy);
    p2.applyForce(-fx, -fy);
  }
  
  function nBodySimulation(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
  
    const particles = [
      new Particle(100, 200, 10, 10, 'red'),
      new Particle(200, 100, 20, 15, 'blue'),
      new Particle(300, 300, 30, 20, 'green'),
    ];
  
    const G = 0.1;
    const dt = 1 / 60;
  
    function update() {
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          applyGravity(p1, p2, G);
        });
      });
  
      particles.forEach((p) => p.update(dt));
    }
  
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.draw(ctx));
    }
  
    function loop() {
      update();
      draw();
      requestAnimationFrame(loop);
    }
  
    loop();
  }
  