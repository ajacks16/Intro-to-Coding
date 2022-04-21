///<reference path="../lib/p5.global-mode.d.ts"/>

class Pong {
    constructor () {
        this.leftScore = 0;
        this.rightScore = 0;

        this.table = new Table();
        this.leftPaddle = new LeftPaddle();
        this.rightPaddle = new RightPaddle();
        this.ball = new Ball();
    }
    draw(){
        this.table.draw();
        this.leftPaddle.draw();
        this.rightPaddle.draw();
        this.ball.draw();

    }
}
class Table {
    draw(){
       background("black")

       let midPoint = windowWidth/2
       for (let y = 0; y < windowHeight;  y++) {
           fill(50)
           rect(midPoint, y, 10, 20)
           y +=40;
       }
    }
}
class Paddle {
    constructor() {
        this.x = 10;
        this.y = windowHeight/2;
        this.width = 10;
        this.height = 100;
    }
    draw(){
      fill("white")
      rect(this.x, this.y, this.height, this.width)
    }
}
class LeftPaddle extends Paddle {
    x = 10;
    draw(){
        super.draw();
    }
}
class RightPaddle extends Paddle{
    x = windowWidth - 60;
    draw(){
        this.y = mouseY;
        super.draw();
    }
}
class Ball {
    draw(){
        
    }
}