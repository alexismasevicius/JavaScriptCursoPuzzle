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

async function procesarPago() {
  try {
    const respuesta = await pagarConTarjeta(100, true);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}

procesarPago();

console.log("Otra tarea");
console.log("Otra tarea");
console.log("Otra tarea");

const allPromises = [
  pagarConTarjeta(100, true),
  pagarConTarjeta(100, true),
  pagarConTarjeta(100, true),
];

//Promise.all(allPromises);

const procesarPagos = async () => {
  try {
    const respuesta = await Promise.all(allPromises);
    console.log(respuesta);
    return "todas resueltas";
  } catch (error) {
    console.log(error);
  }
};

console.log(procesarPagos().then((response) => console.log(response)));
