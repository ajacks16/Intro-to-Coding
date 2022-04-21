///<reference path="lib/p5.global-mode.d.ts"/>

var setup = function () {
    createCanvas(600, 400);
};

var draw = function () {
    background(255);

//red flower petals
    fill(255, 0, 0)
    square(500,30, 20)
    fill(255, 0, 0)
    square(500,50, 20)
    fill(255, 0, 0)
    square(500,70,20)

    fill(255, 0, 0)
    square(520,50,20)
    fill(255,0,0)
    square(520,70,20)
    fill(255,0,0)
    square(520,90,20)

    fill(255,0,0)
    square(540,30,20)
    fill(255,0,0)
    square(540,50,20)
    fill(255,0,0)
    square(540,70,20)

//green stem
    fill(50,230,0)
    square(520,110,20)
    fill(50,220,0)
    square(520,130,20)
    fill(50,210,0)
    square(520,150,20)
    fill(50,220,0)
    square(520,170,20)
    fill(50,230,0)
    square(520,190,20)
    fill(50,230,0)
    square(520,210,20)
    fill(50,230,0)
    square(520,230,20)
    fill(50,230,0)
    square(520,250,20)
    fill(50,230,0)
    square(520,270,0)

//left green part
    fill(50,100,30)
    square(480,110,20)
    fill(50,100,30)
    square(480,130,20)
    fill(50,100,30)
    square(480,150,20)
    fill(50,100,30)
    square(480,170,20)
    fill(50,100,30)
    square(480,190,20)
    fill(50,100,30)
    square(480,210,20)

    fill(50,100,30)
    square(460,130,20)
    fill(50,100,30)
    square(460,150,20)
    fill(50,100,30)
    square(460,170,20)

    fill(50,100,30)
    square(500,150,20)
    fill(50,100,30)
    square(500,170,20)
    fill(50,100,30)
    square(500,190,20)
    fill(50,100,30)
    square(500,210,20)
    fill(50,100,30)
    square(500,230,20)

//right green leaf thing
    fill(50,100,30)
    square(540,170,20)
    fill(50,100,30)
    square(540,190,20)
    fill(50,100,30)
    square(540,210,20)
    fill(50,100,30)
    square(540,230,20)

    fill(50,100,30)
    square(560,110, 20)
    fill(50,100,30)
    square(560,130,20)
    fill(50,100,30)
    square(560,150,20)
    fill(50,100,30)
    square(560,170,20)
    fill(50,100,30)
    square(560,190,20)
    fill(50,100,30)
    square(560,210,20)

    fill(50,100,30)
    square(580,130,20)
    fill(50,100,30)
    square(580,150,20)
    fill(50,100,30)
    square(580,170,20)
};

//for loops, frameRates, mouseY and mouseX