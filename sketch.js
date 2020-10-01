var car,wall
var speed,weight

function setup() {
  createCanvas(10000,400);
  car=createSprite(50, 20, 50, 50);
  car.shapeColor="blue"

  speed=random(1,100);
  weight=random(1,10);
  console.log(speed);
  console.log(weight);

  wall=createSprite(00,200,150000,40/2)
  wall.shapeColor="green"
}

function draw() {
  background(0,0,0);  

console.log(speed);
console.log(weight);

car.velocityX=speed;
car.velocityY=weight

if (car.isTouching(wall)) {
  car.velocityX=0
  car.velocityY=0
  car.shapeColor="red"
  wall.shapeColor="yellpw"
  //Text("not safe")
  //textColor="white"
}else{
  car.shapeColor="blue"
  wall.shapeColor="green"
  car.velocityX=speed;
  car.velocityY=weight
}



  drawSprites();
}