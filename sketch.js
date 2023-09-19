let ground;
let lander;
var lander_img;
var bg_img;
var thrust, crash, land;
var rcs_left;
var rcs_right;
var  obs;
var fuel  = 100;
var timer;
var obstacle_img;
var lz_img;
var meteor;
var meteor_img;

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("./assets/normal.png");
  bg_img = loadImage("./assets/bg.png");
  thrust = loadAnimation("./assets/b_thrust_1.png","./assets/b_thrust_2.png","./assets/b_thrust_3.png");
  crash = loadAnimation("./assets/crash1.png","./assets/crash2.png","./assets/crash3.png");
  land = loadAnimation("./assets/landing1.png","./assets/landing2.png","./assets/landing_3.png");
  rcs_left = loadAnimation("./assets/left_thruster_1.png","./assets/left_thruster_2.png");
  normal = loadAnimation("./assets/normal.png");
  rcs_right = loadAnimation("./assets/right_thruster_1.png","./assets/right_thruster_2.png");
  obstacle_img = loadImage("./assets/obstacle.png");
  lz_img = loadImage("./assets/lz.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Velocidade Vertical: "+round(vy),800,75);
  pop();

  //descida
  vy +=g;
  lander.position.y+=vy;
  drawSprites();
}

  function keyPressed()
  {

  }
