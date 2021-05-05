var ball,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
speed=random(50,90);
weight=random(400,1500);

  car=createSprite(50,200, 50, 50);
  car.shapeColor="blue";
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="brown";
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-car.x<(1)*car.width/2+wall.width/2){
  car.velocityX=0;

  var deformation=0.5*weight*speed*speed/22500;
  if(deformation>180){
    car.shapeColor="red";
  }
  if(deformation<180 && deformation>100){
    car.shapeColor="yellow";
  }
  if(deformation<100){
    car.shapeColor="green";
  }
  }
 
  
}