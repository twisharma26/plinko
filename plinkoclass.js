class Plinko {
    constructor(x, y, r) {
        var properties = {
            isStatic: true
        }
        this.radius = r
        this.body = Bodies.circle(x, y, r, properties)
        World.add(world, this.body)
    }

    display() {
        fill("white")
        ellipse(this.body.position.x, this.body.position.y, this.radius)
    }
}