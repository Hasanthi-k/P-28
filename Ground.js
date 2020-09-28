class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:0.5,
            density:1.2
          }      
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
        
        World.add(world,this.body);
}
display(){
    var pos= this.body.position;
   
    rectMode(CENTER);
    fill(110,61,16);
    rect(pos.x,pos.y-10,this.width,this.height);
}
}