var rows = 4;
var columns = 4;
var randomnumber = 2;
var randomTileIndex = [0,0];

window.onload = function() {
  printTiles();
}


tiles = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

document.addEventListener('keyup', (event) => {
  if (event.code == "ArrowLeft") {
      slideLeft();
  }
  else if (event.code == "ArrowRight") {
      slideRight();
  }
  else if (event.code == "ArrowUp") {
      slideUp();
  }
  else if (event.code == "ArrowDown") {
      slideDown();
  }

  randomTail();
  randomNumber();
  tiles[randomTileIndex[0]][randomTileIndex[1]] = randomnumber;

  printTiles();

  console.log(event.code);
})

function printTiles(){
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      tileid = r.toString() + "-" + c.toString();
      let num = tiles[r][c];
      updateTile(tileid, num);
    }
  }
}

function updateTile(tileid, num) {
  document.getElementById(tileid).innerHTML = num;
}

function slideLeft() {
  for (var row = 0; row < rows; row++) {
      var pointer = 0;

      for (var col = 1; col < columns; col++) {
          if (tiles[row][col] !== 0) {
              var currentTile = tiles[row][col];
              var nextTile = tiles[row][col - 1];

              if (nextTile === 0 || nextTile === currentTile) {
                  if (tiles[row][pointer] === currentTile) {
                      tiles[row][pointer] *= 2;
                      tiles[row][col] = 0;
                  } else {
                      if (tiles[row][pointer] === 0) {
                          tiles[row][pointer] = currentTile;
                          tiles[row][col] = 0;
                      } else {
                          tiles[row][++pointer] = currentTile;
                          tiles[row][col] = 0;
                      }
                  }
              } else {
                  pointer++;
              }
          }
      }
  }
}


function slideRight() {
  for (let row = 0; row < rows; row++) {
      let pointer = rows - 1;

      for (let col = columns - 2; col >= 0; col--) {
          if (tiles[row][col] !== 0) {
              const currentTile = tiles[row][col];
              const nextTile = tiles[row][col + 1];

              if (nextTile === 0 || nextTile === currentTile) {
                  if (tiles[row][pointer] === currentTile) {
                      tiles[row][pointer] *= 2;
                      tiles[row][col] = 0;
                  } else {
                      if (tiles[row][pointer] === 0) {
                          tiles[row][pointer] = currentTile;
                          tiles[row][col] = 0;
                      } else {
                          tiles[row][--pointer] = currentTile;
                          tiles[row][col] = 0;
                      }
                  }
              } else {
                  pointer--;
              }
          }
      }
  }
}

function slideUp() {
  for (let col = 0; col < columns; col++) {
      let pointer = 0;

      for (let row = 1; row < rows; row++) {
          if (tiles[row][col] !== 0) {
              const currentTile = tiles[row][col];
              const nextTile = tiles[row - 1][col];

              if (nextTile === 0 || nextTile === currentTile) {
                  if (tiles[pointer][col] === currentTile) {
                      tiles[pointer][col] *= 2;
                      tiles[row][col] = 0;
                  } else {
                      if (tiles[pointer][col] === 0) {
                          tiles[pointer][col] = currentTile;
                          tiles[row][col] = 0;
                      } else {
                          tiles[++pointer][col] = currentTile;
                          tiles[row][col] = 0;
                      }
                  }
              } else {
                  pointer++;
              }
          }
      }
  }
}


function slideDown() {
  for (let col = 0; col < columns; col++) {
      let pointer = columns - 1;

      for (let row = rows - 2; row >= 0; row--) {
          if (tiles[row][col] !== 0) {
              const currentTile = tiles[row][col];
              const nextTile = tiles[row + 1][col];

              if (nextTile == 0 || nextTile == currentTile) {
                  if (tiles[pointer][col] == currentTile) {
                      tiles[pointer][col] *= 2;
                      tiles[row][col] = 0;
                  } else {
                      if (tiles[pointer][col] == 0) {
                          tiles[pointer][col] = currentTile;
                          tiles[row][col] = 0;
                      } else {
                          tiles[--pointer][col] = currentTile;
                          tiles[row][col] = 0;
                      }
                  }
              } else {
                  pointer--;
              }
          }
      }
  }
}

function randomNumber(){
  let num = Math.floor(Math.random() * 100);

  if(num > 90){
    randomnumber = 4;
  }
  else{
    randomnumber = 2;
  }
}

function randomTail(){
  var indexes = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if(tiles[r][c] == 0){
        indexes.push([r,c]);
      }
    }
  }

  randomTileIndex[0] =indexes[Math.floor(Math.random() * (indexes.length - 0) ) + 0][0];
  randomTileIndex[1] =indexes[Math.floor(Math.random() * (indexes.length - 0) ) + 0][1];
}