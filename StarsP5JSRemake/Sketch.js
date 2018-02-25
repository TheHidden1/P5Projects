let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;
let StarTab ; 

function setup() {
    createCanvas(viewportWidth, viewportHeight);
    StarTab = new StarArray(viewportWidth,viewportHeight,200); 
    strokeWeight(0.2)
}
function draw() {
    background(0)
    // Separation 

    noFill() ;
    stroke(0,255,0) ;
    StarTab.DrawLines(); 

    noStroke();
    StarTab.DrawStars()
    //filter(BLUR, 3); 

    StarTab.Update(viewportWidth,viewportHeight);
}



