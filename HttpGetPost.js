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
  method: "POST", ////METODO
  body: JSON.stringify({
    //// body=donde nosotros mandamos la info-como objeto- del recurso que queremos crear
    ///JSON.stringify convierrte un objeto javascript en un valor en formato JSON
    title: "foo", ///// OBJETO-informacion
    body: "bar",
    userId: 1,
  }),
  headers: {
    //// header= envia algun tipo de info especifica relacionada con el request (contenttype:aplicacion JSON, y si necesitariamos una autorizacion-token)
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

////PUT

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  ///LE indica mediante la direccion que recurso va a actualizar... en este caso el 1
  method: "PUT",
  body: JSON.stringify({
    id: 1,
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

///DELETE

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  ///SOLO MANDA EL METODO
  method: "DELETE",
});
