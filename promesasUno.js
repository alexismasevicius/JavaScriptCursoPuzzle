// PROMESAS

const pagarConTarjeta = (precio, isConected) =>
  new Promise((resolve, reject) => {
    if (!isConected) return;
    console.log("Procesando el pago");
    const limite = 10000;
    setTimeout(() => {
      if (precio < limite) resolve("Compra aprobada");
      else reject("Compra rechazada");
    }, 3000);
  });

console.log(
  pagarConTarjeta(1000000, true)
    .then((respuesta) => {
      console.log(respuesta);
    })
    .catch((error) => console.log(error))
);
console.log("Otra tarea");
