function Weapon(rateOfFire, range, exitVelocity, ammoCount){
  this.RateOfFire = rateOfFire;
  this.Range = range;
  this.exitVelocity = exitVelocity
  this.ammoCount = ammoCount;
  //this.weaponType = weaponType;
  // this.calibre = calibre; //implement later
}

Weapon.prototype.display = function(weaponPos){
  fill(128);
  stroke(0, 255, 0);
  rect(weaponPos.x, weaponPos.y, 5, 3);
}

Weapon.prototype.shoot = function(direction, ammo){
  new Projectile(this.ammunition, direction, this.exitVelocity, 10);
}

Weapon.prototype.reload = function(){

}
