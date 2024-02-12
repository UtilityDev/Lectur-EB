var canvas;

var backgroundColor = '#E3E3F6';
var foregroundColor = 'rgb(197, 197, 247)';

var foregroundRGB = [197, 197, 247];

var circles = [];

class Circle {
    constructor (radius, color=[0,0,0]) {
        this.x = randomPos()[0];
        this.y = randomPos()[1];
        this.radius = radius;
        this.originalRadius = radius;
        this.maxRadius = 160;
        this.color = color;
        this.moveFac = (Math.random() * 0.5) * 2;
        this.opacity = randomRange(75, 180);
    };
    
    draw() {
        noStroke();
        fill(this.color[0], this.color[1], this.color[2], this.opacity);

        let growthFactor = 2;
        if (dist(mouseX, mouseY, this.x, this.y) < this.originalRadius && this.radius < this.maxRadius) {
            this.radius += growthFactor;
        } else {
            if (this.radius > this.originalRadius) {
                this.radius -= growthFactor;
            }
        }
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    move() {
        if (this.x < -this.radius) {
            this.x = windowWidth + this.radius;
        }
        this.x -= this.moveFac;
    }
}

function randomPos() {
    return [
        Math.floor(Math.random() * windowWidth),
        Math.floor(Math.random() * windowHeight),
    ];
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

function setup () {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);

    canvas.style('z-index', '-1');

    for (let i = 0; i < 78; i++) {
        circles.push(new Circle(randomRange(40, 80), foregroundRGB));
    }
}

function draw () {
    background(backgroundColor);

    for (let circle of circles) {
        circle.draw();
        circle.move();
    }
}