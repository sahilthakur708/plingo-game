
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,ground;


function setup() {
  createCanvas(800, 700);
  world=Matter.World
  engine=Engine.create();
ground=Bodies.rectangle(400,600,800,20)
World.add(world,ground)
division1=new Division(400,450,5,300)
division2=new Division(200,450,5,300)
division3=new Division(600,450,5,300)
plinko1=new plinko(230,200,20)
plinko2=new plinko(240,200,20)
plinko2=new plinko(280,200,20)
plinko3=new plinko(320,200,20)
plinko4=new plinko(360,200,20)
plinko5=new plinko(400,200,20)
plinko6=new plinko(440,200,20)
plinko7=new plinko(480,200,20)
plinko8=new plinko(520,200,20)
plinko9=new plinko(560,200,20)
plinko10=new plinko(600,200,20)
plinko11=new plinko(200,150,20)
plinko12=new plinko(240,150,20)
plinko13=new plinko(280,150,20)
plinko14=new plinko(320,150,20)
plinko15=new plinko(360,150,20)
plinko16=new plinko(400,150,20)
plinko17=new plinko(440,150,20)
plinko18=new plinko(480,150,20)
plinko18=new plinko(500,150,20)
plinko19=new plinko(560,150,20)
plinko20=new plinko(600,150,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  division1.display()
  division2.display()
  division3.display()
  plinko1.display()
  plinko2.display()
  plinko3.display()
  plinko4.display()
  plinko5.display()
  plinko6.display()
  plinko7.display()
  plinko8.display()
  plinko9.display()
  plinko10.display()
  plinko11.display()
  plinko12.display()
  plinko13.display()
  plinko14.display()
  plinko15.display()
  plinko16.display()
  plinko17.display()
  plinko18.display()
  plinko19.display()
  plinko20.display()
  
  rect(this.ground.position.x,this.ground.position.y,800,20)
  drawSprites();
 
}





