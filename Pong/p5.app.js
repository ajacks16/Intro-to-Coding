///<reference path="../lib/p5.global-mode.d.ts"/>

let game;

var setup = function () {
    createCanvas(windowWidth, windowHeight);
    background(100);
    game = new Pong
};

var draw = function () {
    game.draw();
};