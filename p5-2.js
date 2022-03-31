///<reference path="lib/p5.global-mode.d.ts"/>

var setup = function () {
    createCanvas(600, 400);
};

var draw = function () {
    background(0);
}

let x = 0;
var draw = function() {
    background(100);
    fill("red");
    circle(x++,100,100);
};

let shape = {
    x:300,
    y:200,
    vx: -6,
    vy: 6,

    draw: function () {
    fill("red")
    circle(
        shape.x += shape.vx,
        shape.y += shape.vy,
        100);

if (shape.x < 0 || shape.x > 600) {
    shape.vx = -shape.vx;
};
if (shape.y < 0 || shape.y > 400) {
    shape.vy = -shape.vy
};
    },
};


var draw = function () {
    background(100); 
    shape.draw();
};