const gameField = document.querySelector(".game-field");
const clearButton = document.querySelector("#clear-button");
const gameFieldSizeChanger = document.querySelector("#field-size");
const labelForFieldSize = document.querySelector("#field-size-value");

let gameFieldSize = gameFieldSizeChanger.value;
let amountOfDivsOnField = getAmountOfDivsOnField(gameFieldSize);

function getAmountOfDivsOnField(fieldSize) {
  return fieldSize * fieldSize;
}

function displayFieldSize() {
  labelForFieldSize.textContent = `Size: ${gameFieldSize}`;
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

function changeFieldSize() {
  gameFieldSize = gameFieldSizeChanger.value;
  amountOfDivsOnField = getAmountOfDivsOnField(gameFieldSize);
  clearGameField();
  displayFieldSize();
}

clearButton.addEventListener("click", clearGameField);
gameFieldSizeChanger.addEventListener("change", changeFieldSize);

createGameField();
displayFieldSize();
