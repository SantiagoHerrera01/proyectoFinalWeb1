const cuentaOrigen = document.getElementById("cuentaOrigen");
const cuentaDestino = document.getElementById("cuentaDestino");
const dineroTransferir = document.getElementById("dinero");
const botonTransferir = document.getElementById("transferir");

const usuarios = [
  { usuario: "juan", contraseña: "1204", saldo: 1000, cuenta: "1000637874" },
  {
    usuario: "santiago",
    contraseña: "1204",
    saldo: 1500,
    cuenta: "1000637875",
  },
];


const transferirDinero = () => {
  const numeroCuentaDestino = cuentaDestino.value;
  const numeroCuentaOrigen = cuentaOrigen.value;
  const cantidadConsignar = parseFloat(dineroTransferir.value);

  const usuarioDestino = usuarios.find(
    (user) => user.cuenta === numeroCuentaDestino
  );
  const usuarioOrigen = usuarios.find(
    (user) => user.cuenta === numeroCuentaOrigen
  );

  usuarioDestino.saldo += cantidadConsignar;
  usuarioOrigen.saldo -= cantidadConsignar;

  console.log(usuarios);

  alert("Transferencia exitosa.");
};

botonTransferir.addEventListener("click", (e) => {
  e.preventDefault();
});
