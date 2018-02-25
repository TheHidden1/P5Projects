let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;
let StarTab;

function setup() {
    frameRate(1);
    createCanvas(600, 600);
    StarTab = new StarArray(600,600,20); 
    strokeWeight(0.9)
}
function draw() {
    background(8, 59, 84)
    StarTab.Draw();
    StarTab.Update();
}



