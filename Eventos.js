//EVENTOS

//Listado de eventos =>

const logo = document.querySelector("#title");
const sayHello = () => {
  alert("HOLa mundo");

  logo.removeEventListener("click", sayHello);
};

//addEventListener
logo.addEventListener("click", sayHello);

let selectedColor;

const selectColor = (event) => {
  selectedColor = event.target.id;
  const strongTag = document.querySelector("#selected-color");
  strongTag.textContent = selectedColor;
};

const paintSquare = (event) => {
  if (!selectedColor) return;
  const selectedSquare = document.getElementById(event.target.id);
  selectedSquare.className = `cell ${selectedColor}`;
  //console.log(event.target.id);
};

const paintSquareOnMove = (event) => {
  if (event.buttons !== 1) return;
  paintSquare(event);
};

const resetter = () => {
  gridSquares.forEach((square) => (square.className = "cell"));
};

const colorSquares = document.querySelectorAll(".color");

colorSquares.forEach((square) => square.addEventListener("click", selectColor));

const gridSquares = document.querySelectorAll(".cell");

gridSquares.forEach((square) => square.addEventListener("click", paintSquare));

gridSquares.forEach((square) => {
  square.addEventListener("mousemove", paintSquareOnMove);
});

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", resetter);
