var drops = [];

function setup() {
  createCanvas(1500,600);
  frameRate(15);
  for(var i = 0;i<100;i = i+1)
  {
    drops.push(new Drop())
  }
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  
  for(var i = 0;i<drops.length;i = i+1)
  {
    drops[i].draw();
    drops[i].update()
  }
  //drawSprites();
}