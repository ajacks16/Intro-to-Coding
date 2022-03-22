///<reference path="lib/p5.global-mode.d.ts"/>

var setup = function() {
    createCanvas (600, 400);
};

var draw = function() {
    background(100); 
    fill (0, 0, 255)
    circle(mouseX, mouseY, 100)

    fill(199, 50, 40)
    square(120, 99, 200,)

    fill(0, 255, 0)
    triangle(100, 140, 130, 120, 160, 120)

}; 

//for loops, frameRates, mouseY and mouseX