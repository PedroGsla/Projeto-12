//Normal
var fundo;
var garoto;
//Img
var fundoImg;
var garotoImg;

function preload(){
  
  fundoImg = loadImage("path.png");
  garotoImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}
function setup(){
 createCanvas(400,400);
 //fundu
 fundo = createSprite(200,200);
 fundo.addImage(fundoImg);
 fundo.scale = 1.2;
 fundo.velocityY = 4; 
 //crianço
 garoto = createSprite(200,330);
garoto.addAnimation("correndo",garotoImg);
garoto.scale = 0.5;

}
function draw(){
  background(0);
  drawSprites();

  //movimentaçion do crianço
 garoto.x = mouseX;

//patio infinito (eita bixo)

if(fundo.y > 400){
  fundo.y = fundo.height/4;
}
}