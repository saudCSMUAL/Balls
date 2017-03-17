function Ball(x, y) {
  
  this.position = {x: x, y: y};
  this.speed = {x:random(-2,2), y:random(-2,2)};
  
  this.draw = function() {
    
    // Bottom
      if(this.position.y > height) {
      this.speed.y *= -1;
      }
    // Right side
      if(this.position.x > width) {
      this.speed.x *= -1;
      }
    // Top
      if(this.position.y < 0) {
      this.speed.y *= -1;
      }
    
    // Left 
      if(this.position.x < 0) {
      this.speed.x *= -1;
      }
      
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    
    ellipse(this.position.x, this.position.y, 50, 50);
    fill(35,25,0,100);
    noStroke(9);
  }
}

var balls = [];

function mouseDragged() {
  var ball = new Ball (mouseX, mouseY);
  balls.push(ball)
}

function setup(){
  resizeCanvas(800,800);
  mousePressed();
}

function draw() {
  background(200);
  for( var i = 0; i < balls.length; i++) {
  balls[i].draw();
  }
}

function setup(){
  resizeCanvas(800,800);
  console.log(Ball.position)
  
}