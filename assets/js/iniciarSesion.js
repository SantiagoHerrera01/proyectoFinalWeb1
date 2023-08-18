const loginForm = document.getElementById("loginForm");
const btnAceptar = document.getElementById("btnAceptar");
const retiro = document.getElementById("retiro");
const contraseñaRetiro = document.getElementById("contraseña")
const botonConsignar = document.getElementById("consignar");
const numeroCuenta = document.getElementById("cuenta");
const cantidad = document.getElementById("cantidad");
const cuentaDestino = document.getElementById("cuentaDestino");
const dineroTransferir = document.getElementById("dinero");
const botonTransferir = document.getElementById("transferir");

let inicioSesion;
let cuentaSesion;
let cuentaSaldo;
let cuentaContraseña;
let intentosInicio = 0;
const maximoIntentosInicio = 3;

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inicioSesionText = document.getElementById("inicioSesionText");
  const correo = document.getElementById("usuario").value;
  const contraseña = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem(correo)) || null;

  const validUser = users !== null && users.contraseña === contraseña;

  if (validUser) {

    mostrarBotones();
    inicioSesion = users.nombre;
    cuentaSesion = users.numeroCuenta;
    cuentaSaldo = users.saldo;
    cuentaContraseña = users.contraseña;

    console.log(inicioSesion);
    console.log(cuentaSesion);
    console.log(cuentaSaldo);
    console.log(cuentaContraseña);

    inicioSesionText.replaceWith(`Bienvenido  ${inicioSesion}`);
    popUp.close();
  } else {
    intentosInicio++;
    if (intentosInicio <= maximoIntentosInicio) {
      return alert("Usuario y/o contraseña incorrectos");
    } else {
      popUp.close();
      alert("sobrepaso el numero de intentos permitidos");
    }
  }
});

const retirarDinero = () => {
    // const numeroCuentaRetirar = cuentaSesion;
    const cantidadRetirar = parseInt(retiro.value);
    const contraseñaRetirar = contraseña.value;
    const saldoLabel = document.getElementById("saldoLabel")
    
    if (isNaN(cantidadRetirar) || cantidadRetirar <= 0) {
        alert("Por favor ingrese un monto válido para retirar.");
        return;
    }

    if (contraseñaRetirar === "" || contraseñaRetirar != cuentaContraseña) {
        alert("Por favor ingrese un pin valido");
        return;
    }

    if (cuentaSaldo < cantidadRetirar) {
        alert("No tiene suficiente saldo para retirar esa cantidad.");
        return;
    }

    cuentaSaldo = cuentaSaldo - cantidadRetirar;
    saldoLabel.textContent = `Su dinero total es: ${cuentaSaldo.toFixed(2)}`;
    alert(`Retiro exitoso. Nuevo saldo: ${cuentaSaldo.toFixed(2)}`);

    agregarMovimiento("Retiro", cantidadRetirar)
    pintarMovimientos()
}

btnAceptar.addEventListener("click", (e) => {
    e.preventDefault();
    retirarDinero()
});

const consignarDinero = () => {
    const cantidadConsignar = parseInt(cantidad.value);

    
    if (isNaN(cantidadConsignar) || cantidadConsignar <= 0) {
        alert("Por favor ingrese un monto válido.");
        return;
    }



    cuentaSaldo = cuentaSaldo + cantidadConsignar;

    const saldoLabel = document.getElementById("labelConsignacion");
    saldoLabel.textContent = `Su dinero total es: ${cuentaSaldo}`;

    alert("Consignación exitosa.");
    agregarMovimiento("Consignacion", cantidadConsignar)
    pintarMovimientos()
}

botonConsignar.addEventListener("click", (e) => {
    e.preventDefault();
    consignarDinero()
});

const transferirDinero = () => {
  const numeroCuentaDestino = cuentaDestino.value;
  const numeroCuentaOrigen = cuentaSesion;
  const cantidadConsignar = parseInt(dineroTransferir.value);

  const usuarioDestino = users != null && users.numeroCuenta === numeroCuentaDestino

  if(usuarioDestino){
    console.log("existe");
  }{
    console.log("no existe");
  }

  usuarioDestino.saldo += cantidadConsignar;
  let destinoSaldo = usuarioDestino
  cuentaSaldo = cuentaSaldo -= cantidadConsignar;

  console.log(destinoSaldo);
  console.log(cuentaSaldo);

  alert("Transferencia exitosa.");

  agregarMovimiento("Transferencia", cantidadConsignar)
  pintarMovimientos()
};

botonTransferir.addEventListener("click", (e) => {
  e.preventDefault();
  transferirDinero
});