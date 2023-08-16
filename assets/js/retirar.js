const btnAceptar = document.getElementById("btnAceptar");
const numeroCuenta = document.getElementById("cuenta");
const retiro = document.getElementById("retiro");
const contraseña = document.getElementById("contraseña")

// const usuarios = [
//     { usuario: "juan", contraseña: "1204", saldo: 1000, cuenta: "1000637874" },
//     { usuario: "santiago", contraseña: "1204", saldo: 1500, cuenta: "1000637875" },
// ];

const retirarDinero = () => {
    const numeroCuentaRetirar = numeroCuenta.value;
    const cantidadRetirar = parseFloat(retiro.value);
    const contraseñaRetirar = contraseña.value;
    const saldoLabel = document.getElementById("saldoLabel")

    const usuarioARetirar = usuarios.find(user => user.cuenta === numeroCuentaRetirar && user.contraseña === contraseñaRetirar);
    console.log(usuarioARetirar);
    
    if (isNaN(cantidadRetirar) || cantidadRetirar <= 0) {
        alert("Por favor ingrese un monto válido para retirar.");
        return;
    }

    if (contraseñaRetirar === "") {
        alert("Por favor ingrese su PIN.");
        return;
    }

    if (usuarioARetirar.saldo < cantidadRetirar) {
        alert("No tiene suficiente saldo para retirar esa cantidad.");
        return;
    }

    // Realizar acciones adicionales según el retiro
    // Por ejemplo, actualizar el saldo y mostrar un mensaje de éxito
    const nuevoSaldo = usuarioARetirar.saldo - cantidadRetirar;
    saldoLabel.textContent = `Su dinero total es: ${nuevoSaldo.toFixed(2)}`;
    alert(`Retiro exitoso. Nuevo saldo: ${nuevoSaldo.toFixed(2)}`);
}

btnAceptar.addEventListener("click", (e) => {
    e.preventDefault();
});

