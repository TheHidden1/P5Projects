class Population {
    
    constructor(_Size,_LifeSpan,_ScreenWidth,_ScreenHeight,_Target) {
        this.Rockets = new Array();
        this.Size  = _Size;
        this.ScreenWidth = _ScreenWidth
        this.ScreenHeight = _ScreenHeight;
        this.LifeSpan = _LifeSpan;
        this.CurrentLifeSpan = 0;
        this.Target = _Target;
        this.DistantFromSource = dist(this.ScreenWidth/2, this.ScreenHeight-20,this.Target.x,this.Target.y);
        for (let i = 0 ; i<this.Size;i++) {
            this.Rockets.push(new Rocket(this.ScreenWidth/2, this.ScreenHeight-20,this.LifeSpan,new Dna(this.LifeSpan,1).Genes));
        }   
        //Obstacle Stuff 
        //Ob1
        this.Rect1X = 0 ;
        this.Rect1Y = this.ScreenHeight/4;
        this.Rect1XLength = this.ScreenWidth/3
        this.Rect1YLength = 10 ;
        //Ob2
        this.Rect2X = (2*this.ScreenWidth)/3 ; 
        this.Rect2Y = (3*this.ScreenHeight)/4 ;
        this.Rect2XLength = this.ScreenWidth/3 ;
        this.Rect2YLength = 10 ;
        //Ob3
        this.Rect3X = (3*this.ScreenWidth)/8 ; 
        this.Rect3Y = (3*this.ScreenHeight)/8 ;
        this.Rect3XLength = this.ScreenWidth/4 ;
        this.Rect3YLength = 10 ;
        //Genetic Stuff
        this.MatingPool = new Array(); 
    }


    Draw() {
        noStroke(); 
        for (let i = 0 ; i<this.Size;i++) {
            this.Rockets[i].Draw();
        };
        this.DrawObstacles();
    }
    Update() { 
        if (this.CurrentLifeSpan==this.LifeSpan) {
             //EndOfLifeCycle
             this.EvaluatePopulation();
             //Reset ;
             this.CurrentLifeSpan = 0;
        };
        for (let i = 0 ; i<this.Size;i++) {
           // console.log(i);
           if(this.EdgeHitDetection(this.Rockets[i].Pos) || this.ObstacleHitDetection(this.Rockets[i].Pos)) { this.Rockets[i].isHit = true ; };
        };  
        for (let i = 0 ; i<this.Size;i++) {
            this.Rockets[i].ApplyForce(this.Rockets[i].Genes[this.CurrentLifeSpan]);
        };  
        for (let i =0;i<this.Size;i++) {
            this.Rockets[i].UpdatePos();
        };
        this.CurrentLifeSpan++;
    }
    EvaluatePopulation(){
        for (let i =0;i<this.Size;i++) {
            this.Rockets[i].CalculateFitness(this.Target,this.DistantFromSource);
        };
        //BestFitness 
         let MaxFit = 0 ;
        for (let i = 0;i<this.Size;i++) {
            if(this.Rockets[i].Fitness > MaxFit){ 
                MaxFit = this.Rockets[i].Fitness ;
            }
        };
        console.log("MaxFit",MaxFit);

        //Normalize 
        for (let i =0;i<this.Size;i++) {
            this.Rockets[i].Fitness /=MaxFit;
           console.log( "Normalized",i,this.Rockets[i].Fitness)
        };

       // MatingPoolCreation
        for (let i =0;i<this.Size;i++) {
            let Probability = this.Rockets[i].Fitness*100;
            for(let j = 0;j<Probability;j++){
                this.MatingPool.push(this.Rockets[i]);
            }
         };
        //console.log(this.MatingPool)

        //BestDnaSelection
        this.Selection();
        //console.log(this.Rockets)
        this.MatingPool = new Array();
    }

    Selection(){
        //let NewPopulation = new Array();
        this.Rockets = new Array() ;
        for(let i = 0 ;i<this.Size ;i++){
            let PA= random(this.MatingPool);
            let PB= random(this.MatingPool);
            this.Rockets.push(new Rocket(this.ScreenWidth/2,this.ScreenHeight-20,this.LifeSpan,new Dna(this.LifeSpan).Cross(PA,PB)));
        }
        //this.Rockets = NewPopulation;
    }

    EdgeHitDetection(_Rocket){
        if(_Rocket.x < 0 || _Rocket.x > this.ScreenWidth || _Rocket.y < 0 || _Rocket.y > this.ScreenHeight) return true ;
        return false ;  
    }
    DrawObstacles(){

        rectMode(CORNER);
        fill(0,0,0);
        //Obs1;
        rect(this.Rect1X,this.Rect1Y,this.Rect1XLength,this.Rect1YLength);
        //Obs2 ;
        rect(this.Rect2X,this.Rect2Y,this.Rect2XLength,this.Rect2YLength);
        //Ob3
        rect(this.Rect3X,this.Rect3Y,this.Rect3XLength,this.Rect3YLength);
       // ellipse(300,300,50);

    }
    ObstacleHitDetection(_Rocket){
        // Each Obstacle Needs its Own Condition / p5 Limitation 
        //Obs1
        if(_Rocket.x >= this.Rect1X && _Rocket.x <= this.Rect1X+this.Rect1XLength && _Rocket.y >= this.Rect1Y && _Rocket.y <= this.Rect1Y+this.Rect1YLength) return true ;
        //Obs2
        if(_Rocket.x >= this.Rect2X && _Rocket.x <= this.Rect2X+this.Rect2XLength && _Rocket.y >= this.Rect2Y && _Rocket.y <= this.Rect2Y+this.Rect2YLength) return true ;
        //Obs3
        if(_Rocket.x >= this.Rect3X && _Rocket.x <= this.Rect3X+this.Rect3XLength && _Rocket.y >= this.Rect3Y && _Rocket.y <= this.Rect3Y+this.Rect3YLength) return true ;
        //if(dist(_Rocket.x,_Rocket.y,300,300)<50) return true ;
       
        return false;


    }
    

};