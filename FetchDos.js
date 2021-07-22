///EJEMPLO UNO

const asyncOperation = new Promise((resolve) => resolve());

asyncOperation.then((resolvedValue) => console.log("Mario"));
console.log("Jan");
console.log("pedro");

///EJEMPLO  DOS

const asyncOperationTwo = fetch("https://jsonplaceholder.typicode.com/todos/1");
asyncOperationTwo.then((resolvedValue) => console.log("MARIO"));
console.log("Jan");
console.log("pedro");

///EJEMPLO  TRES

async function fetchSomething() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mario");
      resolve();
    }, 3000);
  });

  console.log("juan");
}

fetchSomething();

console.log("Pedro");

///EJEMPLO CUATRO

setTimeout(() => console.log("Mario"), 5);

const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 10);
});

promise.then(() => console.log("Juan"));
console.log("Pedro");

//EJEMPLO 5

setTimeout(() => console.log("MArio"), 0);
const promiseDos = Promise.resolve();
promiseDos.then(() => console.log("JUAN"));
console.log("Pedro");
