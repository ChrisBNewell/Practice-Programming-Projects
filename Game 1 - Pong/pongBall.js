function createPongBall(startPosition) {
    return {
        pongBallRadius : 25,
        pongBallPosition : startPosition,
        pongBallMovementSpeed : 7,
        pongBallVelocity: createVector(15, 0),
        pongBallAcceleration : createVector(0, 0),
        update : function() {
            this.move();
            this.draw();    
            this.checkCollisions();
        },
        draw : function() {
            ellipse(
                this.pongBallPosition.x, 
                this.pongBallPosition.y, 
                this.pongBallRadius);
        },
        move : function() {
            this.pongBallPosition.add(this.pongBallVelocity);            
        },
        checkCollisions() {
            if (this.pongBallPosition.x > canvasWidth - this.pongBallRadius ||
                    this.pongBallPosition.x < 0 + this.pongBallRadius) {
                this.pongBallVelocity = createVector(this.pongBallVelocity.x * -1, this.pongBallVelocity.y * -1);
            }
        }
    }
}