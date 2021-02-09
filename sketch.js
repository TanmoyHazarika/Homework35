var Balloon;
var backgroundImg;
var database;
var balloon1;
var BalloonPosition;



function preload(){

  backgroundImg = loadImage("Images/Background.png")
  balloon1 = loadAnimation("Images/Hot Air Ballon-02.png","Images/Hot Air Ballon-03.png","Images/Hot Air Ballon-04.png")
  
}

function setup() {
  createCanvas(1200,500);
  database = firebase.database();
  BalloonPosition = database.ref("balloon/Position")
  BalloonPosition.on("value",readPosition,showError)
  
  Balloon = createSprite(50,250,60,50)
  Balloon.addAnimation("balloon",balloon1)
  Balloon.scale = 0.3

}

function draw() {
  background(backgroundImg);
  if(Position !== undefined){

  
  if(keyDown("up")){
//Balloon.y = Balloon.y -10;
updatePosition(0,-10)
  }
  else if(keyDown("down")){
  //  Balloon.y = Balloon.y + 10;
    updatePosition(0,10)
  }
  else if(keyDown(LEFT_ARROW)){
   // Balloon.x = Balloon.x -10
    updatePosition(-10,0)
  }
  else if(keyDown(RIGHT_ARROW)){
   // Balloon.x = Balloon.x + 10;
  updatePosition(10,0)
  }
  drawSprites();
}
}


function readPosition(data){
  Position = data.val()
  Balloon.x = Position.x,
  Balloon.y = Position.y
}
function updatePosition(x,y){
  database.ref('Balloon/Position').set({
    x : Position.x + x,
    y : Position.y + y
  })

}
function showError(){
  console.log("This is an error")
}





