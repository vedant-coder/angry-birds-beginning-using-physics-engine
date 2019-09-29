const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var object;
function setup(){
  var canvas=createCanvas(400,400);
  engine = Engine.create();
  world = World.create();
  object = Bodies.rectangle(200,100,50,50);
  World.add(world,object);
}
function draw(){
  background ("black");
  fill("green");
  rect(200,100,50,50);
}