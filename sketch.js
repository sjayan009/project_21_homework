var bullet_thickness, wall, bullet, bullet_speed, bullet_weight;
var bullet2_thickness, wall2, bullet2, bullet2_speed, bullet2_weight;
var bullet3_thickness, wall3, bullet3, bullet3_speed, bullet3_weight;
var bullet4_thickness, wall4, bullet4, bullet4_speed, bullet4_weight;


function setup() 
{
  createCanvas(1600,800);
  
  //setting the speeds and weights of the bullets.  
  bullet_speed  = random(200,300);
  bullet2_speed =  random(150,175);
  bullet3_speed = random(175,200);
  bullet4_speed = random(200,250);
  
  //setting weights of bullets
  bullet_weight = random(10,25);
  bullet2_weight = random(15,20);
  bullet3_weight = random(10,20);
  bullet4_weight = random(20,25);
  
  //setting thickness of walls
  wall_thickness = random(40,42);
  wall2_thickness = random(40,42);
  wall3_thickness = random(40,42);
  wall4_thickness = random(40,42);

  //creating the bullet sprites
  bullet = createSprite(75,100,75,25);
  bullet2 = createSprite(75,300,75,25);
  bullet3 = createSprite(75,500,75,25);
  bullet4 = createSprite(75,700,75,25);
  
  //assigning the velocitys to the car. 
  bullet.velocityX = bullet_speed;
  bullet2.velocityX = bullet2_speed;
  bullet3.velocityX = bullet3_speed;
  bullet4.velocityX = bullet4_speed;

  //creating wall sprite:
  wall = createSprite(1200,100,wall_thickness,150);
  wall.shapeColor = color(80,80,80);

  wall2 = createSprite(1200,300,wall_thickness,150);
  wall2.shapeColor = color(80,80,80);

  wall3 = createSprite(1200,500,wall_thickness,150);
  wall3.shapeColor = color(80,80,80);

  wall4 = createSprite(1200,700,wall_thickness,150);
  wall4.shapeColor = color(80,80,80);


  
}

function draw() 
{
  background(color(5,0,0));

  if(isCollided(bullet,wall))
  {
    //making sure that the car stops
    bullet.velocityX = 0;
      
    //creating variable that calculates damage of car.
    var damage = (0.5 * bullet_speed * bullet_speed * bullet_weight)/(wall_thickness * wall_thickness * wall_thickness);
  
    //if the damage is less than 80, the color of the car is green, to represent good damage.
    if(damage < 5)
    {
      wall.shapeColor = color(255,0,0);
    }
  
    //if the damage is greater than 180, the color of the car is red, to represent lethal damage.    
    if(damage > 5)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

  if(isCollided(bullet2,wall2))
{
  //making sure that the car stops
  bullet2.velocityX = 0;
    
  //creating variable that calculates damage of car.
  var damage = (0.5 * bullet2_speed * bullet2_speed * bullet2_weight)/(wall2_thickness * wall2_thickness * wall2_thickness);

  //if the damage is less than 80, the color of the car is green, to represent good damage.
  if(damage < 5)
  {
    wall2.shapeColor = color(255,0,0);
  }

  //if the damage is greater than 180, the color of the car is red, to represent lethal damage.    
  if(damage > 5)
  {
    wall2.shapeColor = color(0,255,0);
  }
}

if(isCollided(bullet3,wall3))
{
  //making sure that the car stops
  bullet3.velocityX = 0;
    
  //creating variable that calculates damage of car.
  var damage = (0.5 * bullet3_speed * bullet3_speed * bullet3_weight)/(wall3_thickness * wall3_thickness * wall3_thickness);

  //if the damage is less than 80, the color of the car is green, to represent good damage.
  if(damage < 5)
  {
    wall3.shapeColor = color(255,0,0);
  }

  //if the damage is greater than 180, the color of the car is red, to represent lethal damage.    
  if(damage > 5)
  {
    wall3.shapeColor = color(0,255,0);
  }
}

if(isCollided(bullet4,wall4))
{
  //making sure that the car stops
  bullet4.velocityX = 0;
    
  //creating variable that calculates damage of car.
  var damage = (0.5 * bullet4_speed * bullet4_speed * bullet4_weight)/(wall4_thickness * wall4_thickness * wall4_thickness);

  //if the damage is less than 80, the color of the car is green, to represent good damage.
  if(damage < 5)
  {
    wall4.shapeColor = color(255,0,0);
  }

  //if the damage is greater than 180, the color of the car is red, to represent lethal damage.    
  if(damage > 5)
  {
    wall4.shapeColor = color(0,255,0);
  }
}

   drawSprites();
}

function isCollided(bullet, wall)
{
  var bulletRight = bullet.x + bullet.width;
  var wallLeft = wall.x;

  if(wallLeft <= bulletRight)
  {
    return true;
  }

  else
  {
    return false;
  }
}

function isCollided2(bullet2, wall2)
{
  var bulletRight = bullet.x + bullet.width;
  var wallLeft = wall.x;

  if(wallLeft <= bulletRight)
  {
    return true;
  }

  else
  {
    return false;
  }
}

function isCollided3(bullet3, wall3)
{
  var bulletRight = bullet.x + bullet.width;
  var wallLeft = wall.x;

  if(wallLeft <= bulletRight)
  {
    return true;
  }

  else
  {
    return false;
  }
}

function isCollided4(bullet4, wall4)
{
  var bulletRight = bullet.x + bullet.width;
  var wallLeft = wall.x;

  if(wallLeft <= bulletRight)
  {
    return true;
  }

  else
  {
    return false;
  }
}