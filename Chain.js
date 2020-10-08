class Chain {

    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA, //JSON - Javascript Object Notation
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
    
        }
    
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
     var pointA = this.chain.bodyA.position;
     var pointB = this.chain.bodyB.position;
        
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x, pointB.y); //x1,y1(x,y of first point),x2,y2 (x,y of the second point)
    }
}