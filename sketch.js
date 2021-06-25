
var monkey , monkey_running
var banana ,bananaImage, obstacles, obstacleImage
var foodGroup, obstacleGroup
var ground , score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
//createCanvas(600, 600)
  monkey=createSprite(80, 315, 20 ,20)
monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(800, 350, 900 ,10)
  ground.velocityX=-4
  ground.x = ground.width /2;
  console.log(ground.x)
  foodGroup= new Group()
   obstacleGroup= new Group()
}


function draw() {
background(255);
  food()
  obstacle()
  if (ground.x<0){
   ground.x = ground.width /2;
  }
  if(keyDown("space") && monkey.y >= 159) {
     monkey.velocityY = -12;
    }
  if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        foodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        foodGroup.setLifetimeEach(-1);
    }

   var survivalTime = 0
  stroke("white")
  text(20)
  fill("white")
  text("Score:"+ score ,500, 50)
  
   stroke("black")
  text(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime ,100, 50)
  monkey.velocityY=monkey.velocityY+ 0.9
  monkey.collide(ground)

   drawSprites();
}
function food(){
if(frameCount%80===0){
 banana= createSprite(600,200, 10, 10);
  banana.y =  random(50, 200)
  banana.velocityX=-2
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.lifetime=300
 foodGroup.add(banana)
}
  
}  
  function obstacle(){
if(frameCount%300===0){
 obstacles= createSprite(600,320,10,40);
 obstacles.velocityX=-2
 obstacles.addImage(obstacleImage)
 obstacles.scale=0.10
  obstacles.lifetime=300
 obstacleGroup.add(obstacles)
}
  
}  


 





