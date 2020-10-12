class dustbin{
    constructor(x, y, width, height){
        var options ={
            'friction': 1.0,
            'isStatic':true,
            'restitution':0.3,
            'density':1.2
        }    
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
        }   
       
        display(){
           var pos = this.body.position;
          // pos.x = mouseX;
          // pos.y = mouseY;
           var angle = this.body.angle;
       
           push();
           translate(pos.x,pos.y);
           rotate(angle);
           strokeWeight(3);
           stroke("white");
           fill("white");
           rect(0,0,this.width,this.height);
           pop();
       }
}