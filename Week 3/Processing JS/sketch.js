//define a circle object
var circle = {
    diameter: 80,
    xCoor: 0,
    yCoor: 0,
    color: [255,0,0], //RGB values gives circle a red color
    xSpeed: 5,
    ySpeed: 5
}

function setup() {
  createCanvas(640, 480);
    background(20,55,76);
    frameRate(50)
}

function draw() {
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    
    
    //if we hit the right/left side of canvas
    if(circle.xCoor > 640){
        circle.color = [Math.random()*255, Math.random() * 255, Math.random() *255] //makes the circle random color
        circle.xSpeed = -circle.xSpeed; //reverse direction
    }else if(circle.xCoor <0){
        circle.color = [Math.random() *255, Math.random() *255, Math.random()*255]; 
        circle.xSpeed = -circle.xSpeed;
    
    //if hit top/bottom side of canvas
    }else if(circle.yCoor < 0){
        circle.diameter = Math.random()*100; //changes diameter by choosing a random number
        circle.ySpeed = -circle.ySpeed; //reverses direction
    }else if(circle.yCoor > 480){
        circle.diameter = Math.random()*100;
        circle.ySpeed = -circle.ySpeed;
    }
    
    //changes position of circle
    circle.xCoor += circle.xSpeed;
    circle.yCoor += circle.ySpeed;
}