/*2)Utilizando setTimeout, crear una funcion que 
actue como temporizador, haciendo una cuenta
regresiva desde el numero de segundoq que se pase
como argumentos hasta llegar a 0. Para este ejercicio
no se puede utilizar ningun tipo de loop
Pista: para resolver el ejercicio pueden investigar 
un poco sobre funciones recursivas*/

let numero = 10;

console.log(numero);

// function temporizador(num) {
//   if (num != 0) {
//     num--;
//     setTimeout(() => {
//       console.log(num);
//       temporizador(num);
//     }, 1000);
//   }
// }

const temporizador = (num) => {
  if (num != 0) {
    num--;
    setTimeout(() => {
      console.log(num);
      temporizador(num);
    }, 1000);
  }
};

temporizador(numero);
