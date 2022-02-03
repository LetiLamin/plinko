class Particle {
  constructor(x, y, angle) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0
    }
    this.body = Bodies.circle(x, y, angle, options)
    this.color = color(random(0, 225), random(0, 225), random(0, 225))
    World.add(world, this.body)
  }
  display() {
    var angle = this.body.angle
    push()
    translate(this.body.position.x, this.body.position.y)
    rotate(angle)
    pop()
  }
}

// Não sei se está certo porque faz tempo que eu não fazia uma classe kkkk, peguei como base a BaseClass.