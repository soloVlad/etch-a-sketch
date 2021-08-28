const GAME_FIELD_SIZE = 16;
const gameField = document.querySelector(".game-field");

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

function getAmountOfDivsOnField(fieldSize) {
  return fieldSize * fieldSize;
}

function makeFieldSquare(field, fieldSize) {
  field.style.gridTemplateColumns = `repeat(${fieldSize}, 1fr)`;
  field.style.gridTemplateRows = `repeat(${fieldSize}, 1fr)`;
  field.style.gridGap = "0px";
}

function createGameField(fieldSize) {
  let amountOfDivsOnField = getAmountOfDivsOnField(fieldSize);

  for (let i = 0; i < amountOfDivsOnField; i++) {
    let newDiv = createDivForField();
    gameField.appendChild(newDiv);
  }

  makeFieldSquare(gameField, fieldSize);
}

createGameField(GAME_FIELD_SIZE);
