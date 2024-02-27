var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100
canvas.height = window.innerHeight - 100

var img1 = new Image();
img1.src = "dinosaur.png";
var img2 = new Image();
img2.src = "cactus.png";

var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw() {
        ctx.fillStyle = "green";
        //ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(img1, this.x, this.y)
    }
}

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = "red";
        //ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(img2, this.x, this.y)
    }
}

var timer = 0;
var cactuses = [];
var jump_timer = 0;
var animation;
function frame() {
    animation = requestAnimationFrame(frame);
    timer++;

    ctx.clearRect(0,0 , canvas.width, canvas.height);
    if (timer % 200 === 0) {
        var cactus = new Cactus();
        cactuses.push(cactus);
    }
    cactuses.forEach((a, i, o) => {

        if (a.x < 0) {
            o.splice(i, 1);
        }

        crash(dino, a);
        a.x--;
        a.draw();
    });

    if (jump_switch) {
        dino.y--;
        jump_timer++;
    }

    if ((!(jump_switch)) && (dino.y < 200)) {
        dino.y++;
    }

    if (jump_timer > 100) {
        jump_switch = false;
        jump_timer = 0;
    }

    dino.draw()
}

frame();

// 충돌확인
function crash(dino, cactus) {
    var x_dif = cactus.x - (dino.x + dino.width);
    var y_dif = cactus.y - (dino.y + dino.width);
    if (x_dif < 0 && y_dif < 0) {
        ctx.clearRect(0,0 , canvas.width, canvas.height);
        cancelAnimationFrame(animation)
    }
}


var jump_switch = false

document.addEventListener('keydown', function (e) {
    if (e.code === "Space") {
        jump_switch = true;
    }
})