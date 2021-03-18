var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
	dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  background(46, 139, 87);
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}



function draw() {  
  if(keyDown(UP_ARROW)) {
    foodStock=foodStock-1;
  }
  if(keyWentDown(UP_ARROW)) {
      writeStock(foodS);
      dog.addImage(happyDog);
  }
  
  text("Note: Press up arrow to feed Grizzly food", 150, 40);
  text("Food Remaining:" + 'Food');

  dog.display();
  happyDog.display();
  database.display();
  foodS.display();
  foodStock.display();
  drawSprites();
}

//reads value from the database
function readStock(data) {
  foodS=data.val();
}

//writes value in the database
function writeStock(x) {

if(x<=0){
  x=0;
}else{
  x=x-1;
}

  datbase.ref('/').update({
    Food:x
  });
}