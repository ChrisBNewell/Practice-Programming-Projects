let canvasHeight = 800;
let canvasWidth = 800;

let maxNumPlayers = 1;
let playerPongPaddles = [maxNumPlayers];

// let maxNumPongBalls = 10;
// let currentNumPongBalls = 1;
// let pongBalls = [maxNumPongBalls];
let pongBall;

let userInput = createUserInputObject();

let inputDirection;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    inputDirection = createVector(0, 0);

    setupPlayers();

    pongBall = createPongBall(
        createVector(canvasWidth / 2, canvasHeight / 2)
    );
}

function draw() {
    background(51);

    userInput.calculateInputAxes();

    inputDirection.x = userInput.horizontal;
    inputDirection.y = userInput.vertical;

    for (let index = 0; index < playerPongPaddles.length; index++) {
        playerPongPaddles[index].update(inputDirection);
    }

    pongBall.update();
}

function setupPlayers() {
    for (let index = 0; index < maxNumPlayers; index++) {
        playerPongPaddles[index] = createPongPaddle(
            createVector(canvasWidth * .15, canvasWidth * .5)
        );
    }
}