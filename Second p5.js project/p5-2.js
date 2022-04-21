///<reference path="lib/p5.global-mode.d.ts"/>


  var setup = function () {
    createCanvas(1400, 600);
};

var draw = function () {
    background(255);
}


let shape = {
    x:300,
    y:200,
    vx: -6,
    vy: 6,

    draw: function () {
    
    square(
        shape.x += shape.vx,
        shape.y += shape.vy,
        100);


if (this.x < 0 || this.x > 1300) {
    this.vx = -this.vx;
    fill(random(255), random(255), random(255));
};
if (this.y < 0 || this.y > 500) {
    this.vy = -this.vy
    fill(random(255), random(255), random(255));
};
    },
};



var draw = function () {
    background(0); 
    shape.draw();
};