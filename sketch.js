var bullet;
var thickness,wall;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(30, 200, 40, 20);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet.velocityX = speed;
  
  damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
}

function draw() {
  background("black");  

  if(bullet.isTouching(wall)) {
  bullet.velocityX = 0;
  }

  if (wall.x - bullet.x < bullet.width/2 + wall.width/2
    && damage < 10) {
  bullet.shapeColor = "green";
 wall.shapeColor = "green";

  } 
  
  if (wall.x - bullet.x < bullet.width/2 + wall.width/2
    && damage > 10) {
      bullet.shapeColor = "red";
      wall.shapeColor = "red";

  } 

  drawSprites();
}