class chain{
    constructor(bodyA1,bodyB2){
        var option={
            bodyA:bodyA1,
            bodyB:bodyB2,
            stiffness:1.4,
            length:5
        }
        this.chain1=Constraint.create(option)
        World.add(world,this.chain1)
    }
    display(){
        var posA=this.chain1.bodyA.position
        var posB=this.chain1.bodyB.position
        strokeWeight(4)
        line(posA.x,posA.y,posB.x,posB.y)
    }
}