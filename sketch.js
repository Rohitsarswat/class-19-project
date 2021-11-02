var PLAY = 1;
var END = 0;
var gameState = PLAY;

var groundImage;
var score
var car1,car2, carImage;
var obstaclesGroup, obstacle1, obstacle2;



function preload(){
    groundImage = loadImage("track.png")
    carImage = loadImage("car1.png")
    car1 = loadImage("car 2.png")
    car2 = loadImage("car 3.png")
}

function setup() {
 createCanvas(470,720)

 ground = createSprite(200,240, 100, 100)
 ground.addImage("ground", groundImage)
 ground.scale = 0.5;
 ground.velocityY = 3

 car  = createSprite(200,600, 100, 100)
 car.addImage("car", carImage)
 car.scale = 0.75;

 obstaclesGroup = new Group();

 score = 0;
}

function draw() {

    background("red")

    if(ground.y > 400){
        ground.y = 300
    }

    if(keyDown("right_arrow")){
        car.x = car.x+10
    }

    if(keyDown("left_arrow")){
        car.x = car.x-10
    }
    spawnObstacles()

    drawSprites()
 
 
}

function spawnObstacles() {
    if(frameCount % 60 === 0) {
      var obstacle = createSprite(200,165,10,40);
      obstacle.addImage(car1)
      obstacle.scale = 0.5
      
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
                break;
        case 2: obstacle.addImage(obstacle2);
                break;
        
      }
      
      obstacle.scale = 0.5;
      obstacle.lifetime = 300;
      obstaclesGroup.add(obstacle);
    }
  }
  