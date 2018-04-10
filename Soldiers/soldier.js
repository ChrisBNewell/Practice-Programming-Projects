function Soldier(position, color, territory, weapon){
  this.position = createVector(position.x, position.y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.territory = territory;
  this.moving = false;
  this.color = color;
  this.weapon = weapon;

  //Soldier state machine
  this.soldierStateMachine = soldierBaseState
}

Soldier.prototype.Update = function(){
  if(this.moving === true){
    this.move();
  }
  else{
    var patrolOffset = 20;
    this.setMoveToPosition(
      random(this.territory.width.x - patrolOffset, this.territory.width.y - patrolOffset),
      random(this.territory.height.x - patrolOffset, this.territory.height.y - patrolOffset)
    );
  }
}

Soldier.prototype.shoot = function(){
  if (this.weapon != null) {
    var targetDirection = createVector(this.target.x - this.position.x,
                                        this.target.y - this.position.y);
    this.weapon.shoot(targetDirection.normalize());
  }
}

Soldier.prototype.setTarget = function(target){
  this.target = target;
}

Soldier.prototype.setMoveToPosition = function(moveToX, moveToY){
  this.moving = true;
  this.moveTo = createVector(moveToX, moveToY);
  //console.log("MoveTo: " + this.moveTo);
}

Soldier.prototype.display = function(){
  fill(this.color);
  stroke(255, 0, 0);
  ellipse(this.position.x - 10, this.position.y, 5, 5);
  ellipse(this.position.x + 10, this.position.y, 5, 5);
  ellipse(this.position.x, this.position.y - 10, 8, 8);
  ellipse(this.position.x, this.position.y, 15, 15);

  this.weapon.display(createVector(this.position.x + 10, this.position.y));
}

Soldier.prototype.move = function(){
  var dir = createVector(this.moveTo.x - this.position.x, this.moveTo.y - this.position.y);

  if(dir.magSq() < 200){
    this.moving = false;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
  }

  dir.normalize();
  this.acceleration = dir.mult(.01);

  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);

  console.log("Position: " + this.position + ", Velocity: " +  this.velocity + ", Acceleration: " +  this.acceleration);
  fill(0, 255, 0);
  line(this.moveTo.x, this.moveTo.y, this.position.x, this.position.y);
}
