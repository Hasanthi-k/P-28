var tree,ground,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var boyImage,stone,String;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
boyImage = loadImage("boy.png");
treeImage = loadImage("tree.png");	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 tree = new Tree(1000,300);

 ground = new Ground(650,600,1300,10);



 boy = createSprite(200,520,5,5);
 boy.addImage("boy",boyImage);
 boy.scale = 0.1;

 stone = new Stone(110,410,50);

 mango1 = new Mango(1000,150,50);
 mango2 = new Mango(900,200,60);
 mango3 = new Mango(1100,250,50);
 mango4 = new Mango(950,250,50);
 mango5 = new Mango(800,250,50);
 mango6 = new Mango(1050,100,60);
 mango7 = new Mango(1200,250,60);
 mango8 = new Mango(950,80,50);
 mango9 = new Mango(1150,180,50);

String = new Launcher(stone.body,{x:250,y:420});


 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  tree.display();
  ground.display();
 
  boy.display();
  stone.display();
  
 // strokeWeight(3);
  //line(150,460,stone.body.position.x,stone.body.position.y);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  String.display();

  detectollision(stone.body,mango1.body);
  detectollision(stone.body,mango2.body);
  detectollision(stone.body,mango3.body);
  detectollision(stone.body,mango4.body);
  detectollision(stone.body,mango5.body);
  detectollision(stone.body,mango6.body);
  detectollision(stone.body,mango7.body);
  detectollision(stone.body,mango8.body);
  detectollision(stone.body,mango9.body);
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	String.fly();
}

function keyPressed(){
    if(keyCode === 32){
	  Matter.Body.setPosition(stone.body,{x:250,y:420})
	  String.attach(stone.body);
    }
}

function detectollision(lstone,lmango){
	mangoBodyPosition= lmango.position
	stoneBodyPosition= lstone.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}

}
///

