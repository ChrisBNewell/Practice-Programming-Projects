var armyA;
var armyB;
var armySize = 10;

function setup() {
	createCanvas(800, 640);
	background(51);

	var armyTerritoryA = {
		width : createVector(0, width / 2 - 100),
		height : createVector(0, height)
	}

	var armyTerritoryB = {
		width : createVector(width / 2 + 100, width),
		height : createVector(0, height)
	}

	armyA = new Army(10, armyTerritoryA,  255);
	armyA.showDetails();
	armyB = new Army(10, armyTerritoryB, 0);
	armyB.showDetails();
}

function draw() {
	background(51);
	armyA.display();
	armyB.display();

	stroke(0);
	noFill();
	rect(0, 0, width/2 - 100, height);

	stroke(255);
	noFill();
	rect(width / 2 + 100, 0, width/2 + 100, height);

	fill(100, 100, 100);
	stroke(255, 255, 0);
	rect(mouseX, mouseY, 15, 20);
}
