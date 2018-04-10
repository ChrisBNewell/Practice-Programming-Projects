function Projectile(ammunition, direction, position, velocity){
  this.ammunition = ammunition;
  this.direction = direction;
  this.position = position;
  this.velocity = velocity;
}

Projectile.prototype.move = function(){
  this.position += this.direction
}
