let ScreenWith = window.innerWidth , ScreenHeight = window.innerHeight 
let PopulationA,Target
function setup() {
    createCanvas(600,600);
    Target = createVector(300,50);
    PopulationA= new Population(50,300,600,600,Target);
}
function draw() {
    background(155,100,25);
    fill(0,0,0);
    ellipse(Target.x,Target.y,20)
    PopulationA.Update();
    PopulationA.Draw();
    // P.Draw();
    // P.UpdatePos();
}



