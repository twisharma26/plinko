class Particle {
    constructor(x, y, r){
        var properties = {
            restitution: 0.8,
            friction: 1, 
            density: 1,
            isStatic: false
        }
        
        this.body = Bodies.circle(x, y, r, properties)
        this.radius = r
        this.color = color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world, this.body)
        console.log(this.body)
    }

    display() {
        var pos = this.body.position
        var angle = this.body.angle
        
        push() //????
        translate(pos.x, pos.y)
        rotate(angle)
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0, 0, this.radius, this.radius) //x, y, x radius, y radius
        pop()
    }
}