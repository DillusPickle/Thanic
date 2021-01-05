var edges, backGround, backGroundImage, idle1, fall1, run1, jump1, smrslt1, rogue;

var JumpCount = 0;
var DoubleJumpCount = 0;
var MaxSpeed = 15;
var Acceleration = 0.8;

function preload() {
  idle1 = loadAnimation("idle1(1).png", "idle1(1).png", "idle1(2).png", "idle1(2).png", "idle1(3).png", "idle1(3).png", "idle1(4).png", "idle1(4).png");
  run1 = loadAnimation("run(1).png", "run(2).png", "run(3).png", "run(4).png", "run(5).png", "run(6).png");
  jump1 = loadAnimation("jump(2).png", "jump(3).png", "jump(4).png", "jump(4).png", "jump(4).png");
  fall1 = loadAnimation("fall(1).png", "fall(2).png");
  smrslt1 = loadAnimation("smrslt(1).png", "smrslt(2).png", "smrslt(3).png", "smrslt(4).png");

  backGroundImage = loadImage("background.png");
}

function setup() {
  createCanvas(1280, 580);

  backGround = createSprite(640,290,0,0);
  backGround.addImage("backGround",backGroundImage);
  backGround.scale = 3.999;
  backGround.depth = -20;

  edges = createEdgeSprites();

  rogue = createSprite(200, 200, 34, 50);
  rogue.addAnimation("run1", run1);
  rogue.addAnimation("fall1", fall1);
  rogue.addAnimation("jump1", jump1);
  rogue.addAnimation("smrslt1", smrslt1);
  rogue.addAnimation("idle1", idle1);
  //rogue.debug = true;
  rogue.scale = 3;
  rogue.setCollider("rectangle", 0, 2, 16, 32);
  rogue.maxSpeedX = MaxSpeed;
  rogue.friction = 0.07;
}

function draw() {
  background(rgb(100, 100, 110));

  controller(rogue, Acceleration);

  if (JumpCount === 0&&rogue.velocityY < 0){
    rogue.changeAnimation("jump1");
  }
  if (JumpCount === 0&&rogue.velocityY > 0){
    rogue.changeAnimation("fall1");
  }
  if (DoubleJumpCount === 0&&rogue.velocityY < 0){
    rogue.changeAnimation("smrslt1");
  }

  rogue.velocityY += 1.2;

  text(JumpCount,20,20);

  rogue.collide(edges[0]);
  rogue.collide(edges[1]);
  rogue.collide(edges[2])
  rogue.collide(edges[3],OnGround);

  drawSprites();
}