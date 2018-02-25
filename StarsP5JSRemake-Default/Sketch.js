let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;
let StarTab ; 

function setup() {
    createCanvas(viewportWidth, viewportHeight);
    StarTab = new StarArray(viewportWidth,viewportHeight,200); 
    strokeWeight(0.2);
}
function draw() {
    background(255);

    noFill();
    stroke(0,0,0) ;
    StarTab.DrawLines(); 

    noStroke();
    StarTab.DrawStars();

    StarTab.Update(viewportWidth,viewportHeight);
}



