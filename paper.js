class Paper{
    constructor(x,y,r){

        var options={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.5

        }
        this.r =30
        this.body= Bodies.circle(x,y,this.r/2,options);
        
        World.add(world,this.body);


    }
    display(){

        var pos = this.body.position;
        push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			
            fill(255,0,255)
            ellipseMode(CENTER);
			ellipse(0,0,this.r, this.r);
			pop()
       


    }







}