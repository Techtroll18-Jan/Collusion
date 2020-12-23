var fixed,moving;

function setup(){
  createCanvas(600,600);
  fixed=createSprite(132,224,50,34);
  fixed.shapeColor="red"
  moving=createSprite(392,414,50,34);
  moving.shapeColor="red"
}

function draw (){
  background("black");
  moving.x=World.mouseX
  moving.y=World.mouseY

  if(moving.x-fixed.x<fixed.width/2+moving.width/2 && 
    fixed.x-moving.x<fixed.width/2+moving.width/2 &&
    moving.y-fixed.y<fixed.height/2+moving.height/2 && 
    fixed.y-moving.y<fixed.height/2+moving.height/2){

moving.shapeColor="green";
fixed.shapeColor="green";

    }

    else{
      moving.shapeColor="orange";
      fixed.shapeColor="orange";
    }

    drawSprites();
}