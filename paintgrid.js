const addIds = () => {
  for (let i = 0; i <= 143; i++) {
    const cell = document.querySelectorAll(".cell");
    cell[i].id = i;
  }
};

addIds();

const colors = {
  pink: "rosa",
  purple: "violeta",
  yellow: "amarillo",
  blue: "azul",
  green: "verde",
  orange: "naranja",
  gray: "gris",
};

let selectedColor;

const selectColor = (event) => {
  console.log("Color selected");
  console.log(event.target.id);
  selectedColor = event.target.id;
  const selectedTag = document.querySelector("#select");
  selectedTag.textContent =
    "El color seleccionado es: " + colors[selectedColor];
};

const colorSquares = document.querySelectorAll(".color");
console.log(colorSquares);

colorSquares.forEach((square) => square.addEventListener("click", selectColor));

const gridSquares = document.querySelectorAll(".cell");

const paintSquare = (event) => {
  if (!selectedColor) return;

  const selectedSquare = document.getElementById(event.target.id);

  selectedSquare.className = `cell ${selectedColor}`;
};

gridSquares.forEach((square) => square.addEventListener("click", paintSquare));

const paintSquareMove = (event) => {
  if (event.buttons !== 1) return;

  paintSquare(event);
};

gridSquares.forEach((square) =>
  square.addEventListener("mousemove", paintSquareMove)
);

//reset
const resetButton = document.querySelector("#reset");

const resetGrid = () => {
  gridSquares.forEach((square) => (square.className = "cell"));
  selectedColor = null;
};

resetButton.addEventListener("click", resetGrid);
