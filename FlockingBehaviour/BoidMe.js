class Boid {
    // OBJECTIV 
    // Remove the p5.js dependance 
    constructor(_X,_Y) {
        this.acceleration = createVector(0,0);
        this.velocity = createVector(random(-1,1),random(-1,1));
        this.position = createVector(_X,_Y);
        this.r = 3.0;
        this.maxspeed = 3;    // Maximum speed
        this.maxforce = 0.05; // Maximum steering force
      }
      Run() {
        this.Update();
        this.Draw();
      }

      Update() {
        // Update velocity
        this.velocity.add(this.acceleration);
        // Limit speed
        this.velocity.limit(this.maxspeed);
        this.position.add(this.velocity);
        // Reset accelertion to 0 each cycle
        this.acceleration.mult(0);
      }
}