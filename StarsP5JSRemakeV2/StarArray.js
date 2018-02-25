class StarArray {
    constructor(_Width,_Height,_Quantity){
       this.Width = _Width;
       this.Height = _Height;  
       this.StarViewDistance = 200;
       this.Stars = new Array();
       this.Lines = new Array();
       for(let i=0;i<_Quantity;i++) {
           this.Stars.push(new Star(this.Width,this.Height));
        };
        let R = random(this.Stars);
        this.Stars.forEach(star => {
            if(star!=R){
                if(dist(R.x,R.y,star.x,star.y)<=this.StarViewDistance){
                    this.Lines.push(new Line(R.x,R.y,star.x,star.y))
                }
            }
            
        });
    }

    Draw() {
        noStroke();
        fill(0, 176, 233);
       this.Stars.forEach(star => {
           star.Draw();  
       }); 
        noFill() ;
        stroke(0, 176, 233) ; 
        this.Lines.forEach(line => {
            line.Draw();  
        });
    }

    Update(){

        this.Lines.forEach(line,index =>{
            if(line.Hittarget){
                this.Stars.forEach(star => {
                        if(dist(line.x,line.y,star.x,star.y)<=this.StarViewDistance){
                            this.Lines.push(new Line(line.Tx,line.Ty,star.x,star.y))
                            console.log("pushed",this.Lines)
                        }    
                },this);
                this.Lines.splice(index,1);
    
            }else{
                line.Update();
            }
        });
        console.log(this.Lines)
    }


        
}
    