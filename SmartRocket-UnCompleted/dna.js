class Dna {
    constructor(_LifeSpan,_New){
        this.Genes = new Array(); 
        if(_New){
        for(let i=0;i<_LifeSpan;i++){
            this.Genes.push(p5.Vector.random2D().setMag(0.1));
        }   
      }
    }
    

    Cross(_PA,_PB){
        let Genes = new Array();
        let RandomPos = Math.round(Math.random()*_PA.Genes.length)
        for(let i=0;i<_PA.Genes.length;i++){
            if(i<RandomPos) Genes.push(_PA.Genes[i])
            else Genes.push(_PB.Genes[i]) ;
        }   
        return Genes ;
    }








}