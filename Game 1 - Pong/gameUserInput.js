function createUserInputObject() {
  return {
    horizontal : 0,
    vertical : 0,
    calculateInputAxes : function() {
      this.calculateVerticalAxis();
      this.calculateHorizontalAxis();
    },
    calculateVerticalAxis : function () {
      if (keyIsDown(UP_ARROW)) {
          this.vertical = 1;
        } else if (keyIsDown(DOWN_ARROW)) {
          this.vertical = -1;
        } else {
          this.vertical = 0;
        }
      }, 
      calculateHorizontalAxis : function () {
      if (keyIsDown(RIGHT_ARROW)) {
          this.horizontal = 1;
        } else if (keyIsDown(LEFT_ARROW)) {
          this.horizontal = -1;
        } else {
          this.horizontal = 0;
        }
    }
  }
}





