let  C  , O
let OldMouseX  ,OldMouseY  
let Center ;
function setup() {
createCanvas(800, 800);
angleMode(DEGREES);
C = new MainCircle(400,400,400) ;
O1 = new Obstacle(40,70) ; 
O2 = new Obstacle(120,150) ; 
O3 = new Obstacle(170,200) ; 
OR = new ObstacleArray() ; 
OR.Add(O1);
OR.Add(O2) ;
OR.Add(O3) ; 
Center =createVector(400,400) ;
Ba = new Ball() ; 
}
function draw() {
	background(51);
	strokeWeight(5);
	stroke(255, 255, 150);
	noFill();
	C.Draw() ;
	OR.Draw((mouseX)/3,(mouseY)/3) ;
	var Distance = p5.Vector.dist(Ba.Pos,Center);
	if (Distance>175) {
		Ba.Vel.mult(-1) ; 
	} else {
		if (Distance<5) {

			Ba.Acc = createVector(random(5,-5)) ;
			
		}
		
	}
	Ba.Move() ; 
	Ba.Draw() ;
  
}

