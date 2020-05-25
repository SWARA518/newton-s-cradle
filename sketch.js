var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,75,200,35);
	ball1 = new Balls();
	ball2 = new Balls();
	ball3 = new Balls();
	ball4 = new Balls();
	ball5 = new Balls();

	
	

	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball1.ball1display();
  ball2.display();
  ball3.display();
  ball4 .display();
  ball5.display();
  drawSprites();
 
}



