var backgroundImage
var pikachu, pikachuImage;
var charmander, charmanderImage;
var squirtle, squirtleImage;
var eevee, eeveeImage;
var venusaur, venusaurImage;
var saurGroup, bulbasaurImage, ivysaurImage;
var platform, platformImage;

function preload() {
  backgroundImage = loadImage("images/messyhouse.jpeg");
  platformImage = loadImage("images/platform.png");
  pikachuImage = loadImage("images/pikachu.png");
  bulbasaurImage = loadImage("images/bulbasaur.png");
  charmanderImage = loadImage("images/charmander.png");
  squirtleImage = loadImage("images/squirtle.png");
  venusaurImage = loadImage("images/venusaur.png");
  ivysaurImage = loadImage("images/ivysaur.png");
  eeveeImage = loadImage("images/eevee.png");
}

function setup() {
  createCanvas(800,400);
  platform = createSprite(200, 350, 400, 400);
  platform.addImage(platformImage);
  platform.scale = 0.15;
  pikachu = createSprite(50, 230, 50, 50);
  pikachu.addImage(pikachuImage);
  pikachu.scale = 0.05;
  eevee = createSprite(155, 230, 50, 50);
  eevee.addImage(eeveeImage);
  eevee.scale = 0.0625;
  squirtle = createSprite(250, 230, 50, 50);
  squirtle.addImage(squirtleImage);
  squirtle.scale = 0.125;
  charmander = createSprite(350, 230, 50, 50);
  charmander.addImage(charmanderImage);
  charmander.scale = 0.125;
  venusaur = createSprite(650, 250, 100, 100);
  venusaur.addImage(venusaurImage);
  venusaur.scale = 0.7;
}

function draw() {
  background(backgroundImage); 
  textSize(20);
  fill('black');
  text('Press space to restart.', 300, 20);
  drawSprites();
}