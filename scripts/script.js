const gameField = document.querySelector(".game-field");
const clearButton = document.querySelector("#clear-button");

let gameFieldSize = 16;
let amountOfDivsOnField = getAmountOfDivsOnField(gameFieldSize);

function getAmountOfDivsOnField(fieldSize) {
  return fieldSize * fieldSize;
}

function createDivForField() {
  let divOnField = document.createElement("div");

  divOnField.style.backgroundColor = "white";
  divOnField.classList.add("game-field-cell");

  divOnField.addEventListener("mouseover", changeCellColor);

  return divOnField;
}

function changeCellColor(e) {
  e.target.style.backgroundColor = "black";
}

function makeFieldSquare() {
  gameField.style.gridTemplateColumns = `repeat(${gameFieldSize}, 1fr)`;
  gameField.style.gridTemplateRows = `repeat(${gameFieldSize}, 1fr)`;
  gameField.style.gridGap = "0px";
}

function createGameField() {
  for (let i = 0; i < amountOfDivsOnField; i++) {
    let newDiv = createDivForField();
    gameField.appendChild(newDiv);
  }

  makeFieldSquare();
}

function deleteGameField() {
  while (gameField.firstChild) {
    gameField.removeChild(gameField.firstChild);
  }
}

function clearGameField() {
  deleteGameField();
  createGameField();
}

clearButton.addEventListener("click", clearGameField);

createGameField();
