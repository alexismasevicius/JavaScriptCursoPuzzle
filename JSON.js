const body = {
  id: 1,
  title: "foo",
  userId: 1,
};

console.log(typeof body);
//convertir a JSON
const parsedBody = JSON.stringify(body);

console.log(body);
console.log(parsedBody);

//Convertir JSON a javscript

const bodyToJS = JSON.parse(parsedBody);

console.log(bodyToJS);
