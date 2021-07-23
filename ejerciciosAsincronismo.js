//EJERCICIO 1

//1) Vamos a simular una carrera entre 3 personas:
// JUAN MARIO Y MARTIN. El orden de largada va a
// ser siempre el mismo:

//console.log(Juan)
//console.log(Mario)
//console.log(Martin)

//El orden de llegada se determina conforme el
// nombre de cada uno vaya apareciendo en la consola,
// de modo qie el ganador sera aquel cuyo nombre sea
// el primero en aparecer

// ACTIVIDAD: Utilizando solemnte setTimeout y sin
// alerar el orden de largada, escribir el codigo
// necesario para obtener los siguientes resultados:

// Vuelta 1:
// Mario
// Martin
// Juan

// Vuelta 2:
// Juan
// Martin
// Mario

// Vuelta 3:
// Martin
// Juan

// Mario

// Vuelta 4:
// Mario
// Juan
// Martin

//--------------------------------------------------------

console.log("Juan");
console.log("Mario");
console.log("Martin");

// console.log("VUELTA 1:");

// setTimeout(() => console.log("Juan"), 5);
// console.log("Mario");
// console.log("Martin");

// console.log("VUELTA 2:");

// console.log("Juan");
// setTimeout(() => console.log("Mario"), 5);
// console.log("Martin");

// console.log("VUELTA 3:");
// setTimeout(() => console.log("Juan"), 10);
// setTimeout(() => console.log("Mario"), 15);
// console.log("Martin");

console.log("VUELTA 4:");

setTimeout(() => console.log("Juan"), 10);
console.log("Mario");
setTimeout(() => console.log("Martin"), 15);
