let canvasData = {
    canvasWidth: 500,
    canvasHeight: 500
}

let worldData = {    
    worldResolution : 50,
    worldTiles : [this.worldResolution * this.worldResolution]
}

let tileOptions = {
    // defaultTileWidth : canvasData.canvasWidth / worldData.worldResolution,    
    // defaultTileHeight : canvasData.canvasHeight / worldData.worldResolution,
    defaultTileWidth : 50,
    defaultTileHeight : 50,
    defaultTileStroke: 200,
    defaultTileFill: 127,
    defaultTileColor : "grey"
}

let time = 0;

function setup() {
    createCanvas(canvasData.canvasWidth, canvasData.canvasHeight);

    for (let x = 0; x < worldData.worldResolution; x++) {
        for (let y = 0; y < worldData.worldResolution; y++) {
            worldData.worldTiles[(x * worldData.worldResolution) + y] = createWorldTile(tileOptions, createVector(x, y));
        }
    }
}

function draw() {
    background(0);
	for (let index = 0; index < worldData.worldTiles.length; index++) {
        worldData.worldTiles[index].drawTile();
    }

    time += 0.1;
}

// function mouseWheel(event) {
//     console.log(event);
//     for (let index = 0; index < worldData.worldTiles.length; index++) {
//         worldData.worldTiles[index].tilePosition.x += event.deltaY;
//     }
// }

function createWorldTile(tileOptions, tilePositionVector) {    
    let positionVector = createVector(tilePositionVector.x * tileOptions.defaultTileWidth, tilePositionVector.y * tileOptions.defaultTileHeight);
    return {
        tileWidth: tileOptions.defaultTileWidth,
        tileHeight: tileOptions.defaultTileHeight,
        tilePosition: positionVector,
        tileColor: tileOptions.defaultTileColor,
        drawTile : function() {
            fill(127);
            stroke(200);
            rect(this.tilePosition.x, this.tilePosition.y, this.tileWidth, this.tileHeight);
        },
        logTileData: function() {
            console.log(this.tileWidth + ", " + this.tileHeight + ", " + this.tilePosition + ", " + this.tileColor);
        }
    }
}