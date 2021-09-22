var runner, runner_running;
var path, leftInvisiblePath, rightInvisiblePath, pathImage;
var coin, coinImage;
var bomb, bombImage;
var energy, energyImage;
var power, powerImage;

var score;


function preload(){
  runner_running = loadAnimation("Runner1.png","Runner2.png");
  
  pathImage = loadImage("path.png");

  coinImage=loadImage("coin.png");

  bombImage=loadImage("bomb.png");

  energyImage=loadImage("energyDrink.png");

  powerImage=loadImage("power.png");
}

function setup() {

  createCanvas(400,400);
  
  path = createSprite(200,200);
  path.addImage("path",pathImage);
  //path.x = path.width /2;
  path.velocityY = 2;
  path.scale=1.3;

  runner = createSprite(200,200,20,50);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.08;
  
  leftInvisiblePath = createSprite(0,00,100,800);
  leftInvisiblePath.visible = false;

  rightInvisiblePath= createSprite(410,00,100,800);
  rightInvisiblePath.visible = false;
  
  var rand =  Math.round(random(1,100))
  console.log(rand)

  // power=createSprite(380,10);
  // power.visible=false;

}

function draw() {

  background(180);
 
  // if(keyDown("space")&& runner.y >= 100) {
  //   runner.velocityY = -10;
  // }
  
 // runner.velocityY = runner.velocityY + 0.8
  
  if (path.y > 400)
  {
    path.y = height/2;
  }

  // if(runner.collide(energy)){
  //   energy.destroy();
  //   power.visible=true;
  // }
  
  runner.collide(leftInvisiblePath);
  runner.collide(rightInvisiblePath);
  
  runner.x= World.mouseX;
 
  spawnCoins();

  spawnBombs();

  spawnEnergys();
  
  drawSprites();
}

function spawnCoins(){
 if(frameCount % 250 === 0)
 {
 
 coin=createSprite(300,100,40,10);
 coin.velocityY=3;
 coin.addImage(coinImage);
 coin.scale=0.4
 coin.x= Math.round(random (01,400)) ;
 coin.depth= runner.depth;
 runner.depth+=1;

}
}
function  spawnBombs()
{
  if(frameCount % 200 === 0)
  {
    bomb=createSprite(100,50,40,10);
    bomb.velocityY=2;
    bomb.addImage(bombImage);
    bomb.scale=0.1;
    bomb.x= Math.round(random (00,400)) ;
    bomb.depth=runner.depth;
    runner.depth+=5;
  }
}

function  spawnEnergys()
{
  if(frameCount % 150 === 0)
   {
  energy=createSprite(200,200,40,10);
  energy.velocityY=2;
  energy.addImage(energyImage);
  energy.scale=0.1;
  energy.x= Math.round(random (02,400)) ;
  energy.depth=runner.depth;
  runner.depth+=3;
  }
}