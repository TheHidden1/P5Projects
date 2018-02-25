class Line {
    constructor(_Ox,_Oy,_Tx,_Ty){
        this.Ox = _Ox ;
        this.Oy = _Oy ;
        this.Tx =_Tx ;
        this.Ty =_Ty ;
        this.Cx = this.Ox ; 
        this.Cy = this.Oy ; 

        this.a = (this.Ty-this.Oy)/(this.Tx-this.Ox) ;
        this.b = this.Ty-(this.a*this.Tx) ;
        this.Hittarget = false ;


        //add x asap
        if(this.Ox < this.Tx) this.MvmSpd = 0.5 ;
        else this.MvmSpd = -0.5;
    }

    Draw(){
        line(this.Ox,this.Oy,this.Cx,this.Cy)
    }
    Update(){
        this.Hittarget = dist(this.Cx,this.Cy,this.Tx,this.Ty) <=  5;  
        if(this.Hittarget) {
            this.Span++;
        }
        else{
        this.Cx += this.MvmSpd ; 
        this.Cy = (this.a*this.Cx) + this.b ;
        }
    }
}