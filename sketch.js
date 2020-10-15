
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var dustbinbottom;
//var dustbinleft;
//var dustbinright;

var paperthrash;
var ground1;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new ground(400,700,800,10);
	//dustbinbottom= new dustbin(650,700,200,10);
	//dustbinleft= new dustbin(550,700, 10,200);
	//dustbinright= new dustbin(750,700,10,200);
	dustbin1= new dustbin(650,700);
	paperthrash= new paper(10,690,10);

	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
 // dustbinbottom.display();
  //dustbinleft.display();
  //dustbinright.display();
  dustbin1.display();
 paperthrash.display();
 keyPressed();
 

  drawSprites();
 
}

function keyPressed()
{
	if (keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paperthrash.body, paperthrash.body.position,{x:85,y:-85});
	}
}



