//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;

  var ball_options= {
    restitution:0.99,
    frictionAir:0.05,
  }

  var ball1_options= {
    restitution:1,
    frictionAir:0.01,
  }

  var ground_options= {
   isStatic:true,
  }


ball=Bodies.circle(100,10,20,ball_options);
World.add(world,ball);

ball1=Bodies.circle(200,30,40,ball1_options);
World.add(world,ball1);

ground=Bodies.rectangle(200,380,400,20,ground_options);
World.add(world,ground);

rectMode(CENTER);
ellipseMode(RADIUS);


}

function draw() 
{
  background(51);
  Engine.update(engine);

fill("yellow");

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
 
 ellipse(ball1.position.x,ball1.position.y,40);
}

