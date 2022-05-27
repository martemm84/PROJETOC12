var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload()
pethImg = loadImage("pet.png");
boyImg = LoadAnimation("runner-1.png","runner-2.png" )
function setup(){
  
  createCanvas(400,400);
 var pista = createSprite(200,200,50,50)
path = createSprite(200,200)
path.addImg(path.Img);
path.velocityY=4;
path.scale=1.2;

boy = createSprite(180,340,30,30)
boy.addAnimation("jakerunning",boyImg)
boy.scale=0.08;
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
boy.x=world.maouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
 boy.collide(leftBoundary);
 boy.collide(rightBoundary);
  
 
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
