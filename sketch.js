
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1200,500);
	engine = Engine.create();
	world = engine.world;
	bobObject1 = new Bob(520,375,40)
	bobObject2 = new Bob(560,375,40)
	bobObject3 = new Bob(600,375,40)
	bobObject4 = new Bob(640,375,40)
	bobObject5 = new Bob(680,375,40)
	roof = new Roof(width/2,height/4,width/7,20)
	
	rope1 = new Rope(bobObject1.body,roof.body,-80,0)
	rope2 = new Rope(bobObject2.body,roof.body,-40,0)
	rope3 = new Rope(bobObject3.body,roof.body,0,0)
	rope4 = new Rope(bobObject4.body,roof.body,40,0)
	rope5 = new Rope(bobObject5.body,roof.body,80,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(210); 
  roof.display()
  
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1,y:3})
  }

}

