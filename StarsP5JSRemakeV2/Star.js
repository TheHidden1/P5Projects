class Star{
    constructor(_Width,_Height) {
        this.x =  _Width*Math.random();
        this.y =  _Height*Math.random();   
    }
    Draw() {  
     ellipse(this.x,this.y,10); 
    }   
}