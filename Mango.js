class Mango {
    constructor(x,y,radius){
  var options={
      isStatic:true,
      restitution:0,
      friction:1
     
    }   
    this.image = loadImage("mango.png");  
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.body = Bodies.circle(x,y,radius-20,options);
 
  
  World.add(world,this.body);
    }
    fall(){
     Matter.Body.setStatic(this.body,false);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      //rectMode(CENTER);
     ellipseMode(CENTER);
     // fill(255);
      //circle(0,0,this.radius);
      imageMode(CENTER);
      image(this.image,0,0,this.radius,this.radius);
      
      pop();
    }
  };