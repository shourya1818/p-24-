const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var trash1;
var world;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 650);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,70);
	ground = new Ground(width/2,620,width,20);
	dustbin1 = new Dustbin(1240,515,20,180);
	dustbin2 = new Dustbin(971,515,20,180);
	dustbin3  =new Dustbin(1105,600,289,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

}


function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:266,y:-266})
}
}
