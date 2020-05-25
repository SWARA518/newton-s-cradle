class Ground{
    constructor(x,y,width,height) {
      var options ={
        isStatic : true
      }
      ground = Bodies.rectangle(x,y,width,height,options);
 	  World.add(world, ground);
      this.width = width;
      this.height = height;
    };
  
    display(){
      rectMode (CENTER);
      ground = loadImage("groundImage2.jpg");
      rect(pos.x,pos.y,this.width,this.height)
    }
  }
  