//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;


function preload()
{
  //load images here
  happyDogIMG = loadImage("images/happydog.png");
  DogImg = loadImage("images/Dog.png");
  dogimg = loadImage("images/dogimg.png");
  dogimg1 = loadImage("images/dogimg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,300,150,150);
  dog.addImage(DogImg);
  dog.scale = 0.1;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)


  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  } 
  drawSprites();
  //add styles here
textSize(35);
fill("White");
stroke("Black");
text("Food Remaing"+foodS,170,200);
}
function readStock(data){
    foodS = data.val();
  }
  function writeStock(x)
  {
     if(x<=0){ x=0;
   }
   else{ x=x-1;
   }
    database.ref('/').update({ Food:x }) }


