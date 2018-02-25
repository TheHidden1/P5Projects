class Obstacle {

    constructor(_Start,_End) {
        this.Start = _Start ; 
		this.End = _End ; 
    }
    Draw(X,Y) {
        strokeWeight(30); 
        stroke(255,0,0);
        noFill();	
        arc(400,400,400,400,this.Start+X+Y,this.End+X+Y);
    }
}
class ObstacleArray {
    constructor() {
        this.OArray = new Array() ;
    }
    Add(X) {
		this.OArray.push(X) ; 
	} 
	Draw(X,Y){
		this.OArray.forEach(function(element) {
			element.Draw(X,Y) ;
		}, this);
	}
}