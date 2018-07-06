//define a circle object
/*var circle = {
    diameter: 80,
    xCoor: 0,
    yCoor: 0,
    color: [255,0,0], //RGB values gives circle a red color
    xSpeed: 5,
    ySpeed: 5
}
*/

//ellipse(x, y, w,)
//ellipse(x, y, w, h)
function Circle(x, y, size, color, xSpeed, ySpeed){
    this.xCoor = x;
    this.yCoor = y;
    this.diameter = size;
    this.color = color; 
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
}

var circle = new Circle(0,0,80, [255,0,0], 2, 10);
var circle2 = new Circle(0, 30, 50, 7, 7);
/*var circleList = [circle, circle2, new Circle(100,0,18)];*/


function setup() {
    createCanvas(parseInt(prompt("Enter canvas width")),parseInt(prompt("Enter canvas height"))); //lets user choose canvas size
    frameRate(50);
    ballAmount();
}


function randomColor(){
    return[random(0, 255), random(0, 255), random(0, 255)];
}


//function chooses random number & loops until circles equals a number within number array
function ballAmount(){
    var circles = random([2,5,9,16]);
    for(var numBall = 0; numBall < circles; numBall ++){
        circleList.push(new Circle(0,0, 80, [random(0, 255), random(0, 255), random(0, 255)], random(0, 20), random(0, 20))); //adds new circles to empty array
    };
}

//empty array
var circleList = [];


function draw(){
    background(255,255,255); //sets background to white so no color of trails show

    
    for(var i = 0; i < circleList.length; i++){
        fill(circleList[i].color);
        ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter);
        
        //if we hit the right/left side of canvas
        if(circleList[i].xCoor > width || circleList[i].xCoor <0){
            circleList[i].color = [random(0,255), random(0,255), random(0,255)] //makes the circle random color
            circleList[i].xSpeed = -circleList[i].xSpeed; //reverse direction


        //if hit top/bottom side of canvas
        }if(circleList[i].yCoor < 0 || circleList[i].yCoor > height){
            circleList[i].diameter = random(0,100); //changes diameter by choosing a random number
            circleList[i].ySpeed = -circleList[i].ySpeed; //reverses direction
        }
            
        //changes position of circle
        circleList[i].xCoor += circleList[i].xSpeed;
        circleList[i].yCoor += circleList[i].ySpeed;
    }
}
