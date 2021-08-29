const DRAWING_OPTIONS = ["black", "random"];
const gameField = document.querySelector(".game-field");
const clearButton = document.querySelector("#clear-button");
const gameFieldSizeChanger = document.querySelector("#field-size");
const labelForFieldSize = document.querySelector("#field-size-value");

const blackPenButton = document.querySelector("#black-pen-button");
const randomPenButton = document.querySelector("#random-color-button");
const grayscalePenButton = document.querySelector("#grayscale-button");

let gameFieldSize = gameFieldSizeChanger.value;
let amountOfDivsOnField = getAmountOfDivsOnField(gameFieldSize);
let drawingMode = DRAWING_OPTIONS[0];

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
  if (drawingMode === DRAWING_OPTIONS[0]) {
    e.target.style.backgroundColor = "black";
  } else if (drawingMode === DRAWING_OPTIONS[1]) {
    e.target.style.backgroundColor = getRandomColor();
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
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

blackPenButton.addEventListener("click", () => {
  drawingMode = DRAWING_OPTIONS[0];
});

randomPenButton.addEventListener("click", () => {
  drawingMode = DRAWING_OPTIONS[1];
});

createGameField();
displayFieldSize();
