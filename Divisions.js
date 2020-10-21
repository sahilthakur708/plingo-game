class Division{
    constructor(x,y,width,height){
        var options={isStatic:true}
        this.Body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.Body)
    }
    display(){
        push()
        fill("white")
rect(this.Body.position.x,this.Body.position.y,this.width,this.height)
        pop()
    }
}