class paper{
 constructor(x, y, r) {
 /*var options ={
    isStatic:false,
    restitution:0.3,
     friction: 0.5,
     density:1.2
 }    
 
 this.x = x;
 this.y = y;
 this.radius = radius;
 this.body= Bodies.circle(this.x, this.y, this.radius/2, options);

 World.add(world, this.body); */

 var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
   // gravity:20.0

    
    }
this.x=x;
this.y=y;
this.r=r
this.body=Bodies.circle(this.x, this.y, this.r/2, options)
World.add(world, this.body);

 }   

 display(){
    
    /*var pos = this.body.position;
  

    push()
    translate(pos.x,pos.y);
    rectMode(CENTER)
    strokeWeight(3);
    stroke("white");
    fill("white");
    //ellipseMode(RADIUS)
    ellipse(0,0,this.radius,this.radius);
    pop()*/
    var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
}
}