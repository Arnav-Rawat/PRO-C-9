var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor = "red";
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyWentDown(RIGHT_ARROW)){
    box.x = box.x + 5;
  }
  if (keyWentDown(LEFT_ARROW)){
    box.x = box.x - 5;
  }
  if (keyWentDown(UP_ARROW)){
    box.y = box.y - 5;
  }
  if (keyWentDown(DOWN_ARROW)){
    box.y = box.y + 5;
  }
}




