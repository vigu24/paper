class Ball {
    constructor(x,y,r){
var opt={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
}
this.x=x;
this.y=y;

this.r=r
this.image=loadImage("paper.png");
this.body=Bodies.circle(this.x,this.y,this.r-30,opt);
World.add(world,this.body)
    }
display(){
    var paperpos=this.body.position;
    push();
    translate(paperpos.x,paperpos.y);

    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();
}
}
