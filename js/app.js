//define raindrop class
class Raindrop {
    constructor(cx, cy, radius, color) {
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
        this.speed = 1 + Math.random() * 2;
    }

    update() {
        this.y = this.y + this.speed;
        fill(this.color);
        circle(this.x, this.y, this.radius);
    }
}

//define ground class
class Ground {
    constructor(fx, fy, width, height, color) {
        this.x = fx;
        this.y = fy;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    update() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }

}

//define global variables here
var myDrops = [];
let xPos = 15;
var d = 1;
var c = 1;

let cloudx = 100; //for clouds
let cloudy = 100; //for clouds
let blue = 189; //for clouds

//define rain object
for (var i = 0; i < 30; i++) {
    myDrops[i] = new Raindrop(xPos * i, 10, 1.5, [50, 162, 168]); //rain instance
}

//define ground object
var bottom = new Ground(0, 260, 400, 40, [50, 162, 168, 5]); //ground instance


function setup() {
    let canvas = createCanvas(400, 300);
    canvas.parent('container');
}

function draw() {
    noStroke();
    background(194, 194, 194); //set background color

    //added clouds for my own enjoyment - code found p5 website 
    makeCloud(cloudx, cloudy - 50);
    makeCloud(cloudx + 100, cloudy + 100);
    cloudx += 0.1;
    blue--;

    //draw ground
    bottom.update();

    //make rain
    for (var j = 0; j < 30; j++) {
        myDrops[j].update();
    }

    //rain + ground color change

    for (var k = 0; k < 30; k++) {
        if (bottom.y < myDrops[k].y) { //if rain hits ground level
            // console.log("Collision Detected!"); //notify ground it was hit
            myDrops[k].y = 10; // move circles back up to top
            var e = d++; // count number of hits
            console.log(e);
        }
        if (e == 10) { //if hits equal 10
            var change = c++; //set variable to increase opacity 
            bottom.color = ([50, 162, 168, 10 + change]); // increase opacity of ground color
            // console.log(change);
            // console.log("opacity change");
        }
        if (e >= 10) { //if hits exceed ten
            // console.log("reset to zero");
            d = 1; //reset back to 1 
        }

    }

    //added clouds for my own enjoyment - code found p5 website 
    function makeCloud(cloudx, cloudy) {
        fill(250)
        noStroke();
        ellipse(cloudx, cloudy, 70, 50);
        ellipse(cloudx + 10, cloudy + 10, 70, 50);
        ellipse(cloudx - 20, cloudy + 10, 70, 50);
    }
}



//create class for raindrops
//create class for ground
//create 10 circles in the array
//if raindrops hits ground
//remove raindrop 
//inform ground it was hit
//if x, y or circle == top of rect ground
//if 10 hits on ground
//10 y coordinates hit y coordinate of ground
//increase blue color