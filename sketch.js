
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinbottom;
var dustbinleft;
var dustbinright;
var paperthrash;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new ground(400,700,800,10);
	dustbinbottom= new dustbin(640,700,200,20);
	dustbinleft= new dustbin(540,700, 20,200);
	dustbinright= new dustbin(740,700,20,200);
	
	paperthrash= new paper(150,690,10,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  dustbinbottom.display();
  dustbinleft.display();
  dustbinright.display();
 paperthrash.display();
 
 keyPressed();
 //Engine.update(engine);

 
 // containerlocationbottom.display();
  drawSprites();
 
}

function keyPressed()
{
	if (keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paperthrash.body,paperthrash.body.position,{x:85,y:85});
	}
}



