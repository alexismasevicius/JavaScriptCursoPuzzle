/*
Protocolo Http
GET, POST, PUT, DELETE

GET=> Solicitar datos o informacion al servidor


POST=> Enviar informacion al servidor
PUT => Modificar informacion en el servidor
DELETE => Borrar informacion del servidor


FETCH=>Es una funcion de javascript que nos 
permite hacer un pedido http utilizando
 promesas... es una funcionalidad  asincronica
*/

//GET
fetch("https://jsonplaceholder.typicode.com/posts/10")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

//POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
