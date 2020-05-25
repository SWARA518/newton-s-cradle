class Balls{
    constructor(){
        ball = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
        World.add(world, packageBody); 
        this.width = width;
        this.height = height;
    }
    display();
    rectMode (CENTER);
    rect(x,y,width,height)
}