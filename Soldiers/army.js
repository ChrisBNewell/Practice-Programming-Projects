function Army(armySize, armyTerritory, armyColor){
  this.soldiers = [];
  this.armyTerritory = armyTerritory;
  this.armySize = armySize;
  this.armyColor = armyColor;
  this.recruitSoldiers(this.armySize);
}

Army.prototype.recruitSoldiers = function(numNewRecruits){
  for (var i = 0; i < numNewRecruits; i++) {
    var spawnOffset = 30;
    var soldierPos = createVector(
      random(this.armyTerritory.width.x - spawnOffset, this.armyTerritory.width.y - spawnOffset),
      random(this.armyTerritory.height.x - spawnOffset, this.armyTerritory.height.y - spawnOffset)
    );
    var ammo = new Ammunition(10, 1);
    var rifle = new Weapon(1, 100, 2, ammo, 100);
    this.soldiers.push(new Soldier(soldierPos, this.armyColor, this.armyTerritory, rifle));
  }
}

Army.prototype.display = function(){
  for(var i = 0; i < this.armySize; i++){
		this.soldiers[i].display();
		this.soldiers[i].Update();
	}
}

Army.prototype.shoot = function(){
  for (var i = 0; i < this.armySize; i++) {
    //this.soldiers[i].shoot();
  }
}

Army.prototype.showDetails = function(){
  console.log("Army Size: " + this.armySize +
    " \n Army Territory width: " + this.armyTerritory.width.x, this.armyTerritory.width.y
    + " \n Army Territory height: " + this.armyTerritory.height.x, this.armyTerritory.height.y
    + " \n Army Color: " + this.color);
}
