const botonConsignar = document.getElementById("consignar");
const numeroCuenta = document.getElementById("cuenta");
const cantidad = document.getElementById("cantidad");

 const usuarios = [
     { usuario: "juan", contraseña: "1204", saldo: 1000, cuenta: "1000637874" },
     { usuario: "santiago", contraseña: "1204", saldo: 1500, cuenta: "1000637875" },
 ];

const consignarDinero = () => {
    const numeroCuentaConsignar = numeroCuenta.value;
    const cantidadConsignar = parseFloat(cantidad.value);

    const usuarioAConsignar = usuarios.find(user => user.cuenta === numeroCuentaConsignar);

    console.log(usuarioAConsignar)
    console.log(numeroCuentaConsignar);
    console.log(cantidadConsignar);
    console.log("hola");

    
    if (isNaN(cantidadConsignar) || cantidadConsignar <= 0) {
        alert("Por favor ingrese un monto válido.");
        return;
    }

    if (!usuarioAConsignar) {
        console.log("el destinatario es: " + usuarioAConsignar)
        alert("Número de cuenta no encontrado.");
        return;
    }

    usuarioAConsignar.saldo += cantidadConsignar;

    const saldoLabel = document.querySelector('.section__spaceTitle span');
    saldoLabel.textContent = `Su dinero total es: ${usuarioAConsignar.saldo}`;

    alert("Consignación exitosa.");
}

botonConsignar.addEventListener("click", (e) => {
    e.preventDefault();
});

