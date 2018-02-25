class Ball {

	constructor() {

		this.Pos = createVector(400,400) ;
		this.Vel = createVector(5,5) ;
		this.Acc = createVector(0,0) ;

	}

	Move() {
		this.Vel.x += this.Acc.x;
		this.Vel.y += this.Acc.y ; 
		this.Acc  = createVector(0,0) ;  
		this.Pos.x +=this.Vel.x ;
		this.Pos.y +=this.Vel.y ;
	}
	Draw(){
		fill(255, 255, 150); 
		noStroke();
		ellipse(this.Pos.x,this.Pos.y,25);
	}




}