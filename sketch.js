var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 20);
  car.shapeColor = "blue";

  wall = createSprite(1500,200,40,height/2);
  wall.shapeColor = "80,80,80";

  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;

}

function draw() {
  background(0,0,0); 

  collided();

  drawSprites();
}
