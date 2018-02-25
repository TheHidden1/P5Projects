class MainCircle {
    constructor(x,y,r) {
       this.x = x;
       this.y = y;
       this.r = r;
    }
    Draw() {
       ellipse(this.x,this.y,this.r);
    }
}  