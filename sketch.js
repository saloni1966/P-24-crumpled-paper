
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var b1,b2,b3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Paper(100,100,20);
	b1 =new Dustbin(600,340,10,40)
	b2 =new Dustbin(750,340,10,40)
	b3=new Dustbin(675,360,150,10)
	ground = new Ground(400,370,800,10);
	Engine.run(engine);
  
}

//function draw
function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  b3.display();
  b1.display();
  b2.display();
  
  ground.display();

  drawSprites();
 //sprite
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75});
	}
}

