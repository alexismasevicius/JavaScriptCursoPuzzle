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

const colorSquares = document.querySelectorAll(".color");

colorSquares.forEach((square) => square.addEventListener("click", selectColor));

const gridSquares = document.querySelectorAll(".grid");

gridSquares.forEach((square) => square.addEventListener("click", paintSquare));

//gridSquares.forEach((square) => {
//  square.addEventListener("mousemove", paintSquare)};
