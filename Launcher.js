class Launcher{
    constructor(bodyA,pointB){
      var options ={
            pointB:{x:150,y:460},
            bodyA:stone.body,
            stiffness:0.04,
            length:10
       
        }
       
        this. string = Constraint.create(options);
        World.add(world,this.string);
    
}
attach(body){
    this.string.bodyA = body;
}
fly(){
    this.string.bodyA = null;
}
display(){
       
    if(this.string.bodyA){   
    var pointA = this.string.bodyA.position;
    var pointB = this.string.pointB;
   
     stroke(0);
     strokeWeight(3);
     line(pointA.x,pointA.y,pointB.x,pointB.y);  
    }
}
}