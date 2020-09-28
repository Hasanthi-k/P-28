class Stone {
    constructor(x,y,radius){
  var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:0.5
    }  
  this.image = loadImage("stone.png") ;    
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.body = Bodies.circle(x,y,radius-30,options);
 
  
  World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
     // rectMode(CENTER);
     ellipseMode(RADIUS);
     // fill(255);
    // circle(0,0,this.radius-30);
      imageMode(CENTER);
      image(this.image,0,0,this.radius,this.radius);
      
      pop();
    }
  };