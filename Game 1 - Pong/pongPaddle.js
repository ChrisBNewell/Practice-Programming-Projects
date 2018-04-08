function createPongPaddle(startPosition) {
    return {
        paddleWidth : 30,
        paddleHeight : 80,
        paddlePosition : startPosition,
        paddleMovementSpeed : 3.5,
        update : function(inputDirection) {
            this.move(inputDirection);
            this.draw();            
        },
        draw : function() {
            rect(this.paddlePosition.x, 
                this.paddlePosition.y, 
                this.paddleWidth, 
                this.paddleHeight); 
        },
        move : function(movementDirection) {            
            let movementVector = createVector(
                movementDirection.x * this.paddleMovementSpeed,
                movementDirection.y * -this.paddleMovementSpeed
            );

            this.paddlePosition.add(movementVector);
        }
    }
}