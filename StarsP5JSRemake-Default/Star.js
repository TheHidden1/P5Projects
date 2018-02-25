class Star{
    constructor(_Width,_Height,_MouvementSpeed) {
        this.X =  Math.random()*_Width;
        this.Y =  Math.random()*_Height;
        this.VX = (_MouvementSpeed*(Math.random()));
        this.VY = (_MouvementSpeed*(Math.random()));
        this.Radius =  Math.round(Math.random()*10) ; 
        this.Red =  Math.round(Math.random()*255);
        this.Green = Math.round(Math.random()*255);
        this.Blue =Math.round(Math.random()*255);
        if(Math.random()<0.5) this.VX =-this.VX;
        if(Math.random()<0.5) this.VY =-this.VY;
    }

    Draw() {
    
        fill(this.Red,this.Green,this.Blue);
        ellipse(this.X,this.Y,this.Radius);
    }

    Update(_Width,_Height) {
        if(this.Y < 0 || this.Y > _Height){ this.VY = - this.VY;};
        if(this.X < 0 || this.X > _Width){ this.VX = - this.VX;}
        this.X += this.VX;
        this.Y += this.VY;
    }
       
   
}