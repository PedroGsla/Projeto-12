//variavel global
var patio;
var garoto;
var limiteE;
var limiteD;
//imagem
var patioImg;
var garotoImg;
var i;

function preload(){
  patioImg.loadImage("path.png");
  garotoImg.loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
 
}

 function setup(){
  createCanvas(400,400);
  //velocity Y.
  patio = createSprite(200,200,200,200)
  patio.addImage(patioImg);
  patio.scale=1.2;

garoto = createSprite(200,350,40,40)
garoto.addAnimation("correndo",garotoImg);
garoto.scale=0.08;
  

//limiteE = createSprite(0,0,100,800);



//limiteD=createSprite(410,0,100,800);
patio.velocityY = 4;
}

function draw() {
  background(0);
  drawSprites();
  createEdgeSprites();
 
  if(patio.y > 400 ){
    patio.y = height/2;
  }
 
  
 

  
  //código para redefinir o fundo
  
  
  
}
