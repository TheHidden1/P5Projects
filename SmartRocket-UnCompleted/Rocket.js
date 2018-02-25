class Rocket {

    constructor(_X,_Y,_LifeSpan,_Genes){
        // Physics of rocket at current instance
        this.Pos = createVector(_X,_Y);
        this.Vel = createVector();
        this.Acc = createVector();
        //Dna Stuff 
        this.Genes = _Genes ;
        this.Fitness = 0 ;
        this.isHitObstacle = false ;
        this.isHitTarget = false ;
        this.HitObstacleLifeCycle = 0 ;
        this.HitTargetLifeCycle = 0 ;
        //Color Stuff 
        this.Red = 0;
        this.Green = 0 ;
        this.Blue = 0 ;
        this.Alpha = 1 ;
        this.Skip = false ;

    }

    ApplyForce(Force) { 
         this.Acc.add(Force);
    }


    UpdatePos(_LifeSpan) {
        if(this.isHit){ 

            if(!this.Skip) {
                this.HitObstacleLifeCycle = _LifeSpan ;
                this.Skip !=this.Skip ;
            }
           

        }else{
        this.Vel.add(this.Acc);
        this.Pos.add(this.Vel);
        this.Acc.mult(0);
        }

    }

    Draw() {
        push();
        translate(this.Pos.x, this.Pos.y);
        rotate(this.Vel.heading());
        rectMode(CENTER);
        fill(this.Red,this.Green,this.Blue);
        rect(0,0,50,10);
        pop();
    }

    CalculateFitness(_Target,_ScreenHeight){

        this.Fitness =map(dist(this.Pos.x,this.Pos.y,_Target.x,_Target.y),0,_ScreenHeight,1,0);
        if(this.isHit) this.Fitness -= 0.25;
        if(this.isHitTarget) this.Fitness +=0.7 ;


    };

}