class plinko{
    constructor(x,y,radius){
        var options={isStatic:true}
        this.Body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(World,this.Body)
    }
    display(){
        push()
        fill("white")
       circle(this.Body.position.x,this.Body.position.y,this.radius)
        pop()
    }
}