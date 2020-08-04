var paper1;
var ground;
var bin1,bin2,bin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,690,800,20);
	paper1=new Paper(100,680);
	bin = new Bin(650,670);
	


}

function draw() {
  background("white");
  Engine.update(engine);
 
  
 ground.display();
 bin.display();
 paper1.display();
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:120,y:-197});
	}
}


