var rect1,rect2
function setup() {
  createCanvas(800,800);
  rect1=createSprite(100, 200, 50, 50);
  rect1.shapeColor="green";
  rect1.debug=true
  rect2=createSprite(600, 200, 100, 50);
  rect2.shapeColor="green";
  rect2.debug=true
  rect1.velocityX=3
  rect2.velocityX=-3

}

function draw() {
  background(0);
  //rect2.x=mouseX
  //rect2.y=mouseY

 if( isConnecting(rect1,rect2)) {
    rect1.shapeColor="yellow";
    rect2.shapeColor="yellow";
  }
  else{
    rect1.shapeColor="green";
    rect2.shapeColor="green";  
  }

  bounceBack(rect1,rect2)
  drawSprites();
}
