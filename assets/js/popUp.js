const popUp = document.getElementById("login__popUp");
const btnIniciarSesion = document.getElementById("button__Iniciar__sesion");
const btnIniciarSesionPopUp = document.getElementById("IniciarSesion");
const buttons = document.getElementById("buttons");
const popUpDos = document.getElementById("popUpDos");
const buttonRegister = document.getElementById("registrarU");
const buttonCancel = document.getElementById("buttonCancel");

const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("password");

const users = JSON.parse(localStorage.getItem('users')) || [];

let inicioSesion;
let intentosInicio = 0;
const maximoIntentosInicio = 3;

// const usuarios = [
//   { usuario: "juan", contraseña: "1204", saldo: "1000", cuenta: "1000637874" },
//   {
//     usuario: "santiago",
//     contraseña: "1204",
//     saldo: "1500",
//     cuenta: "1000637875",
//   },
// ];

btnIniciarSesion.addEventListener("click", () => {
  popUp.showModal();
});

buttonCancel.addEventListener("click", (e) => {
  e.preventDefault();
  popUp.close();
});

buttonRegister.addEventListener("click", (e) => {
  e.preventDefault();
  popUpDos.showModal();
});



const mostrarBotones = () => {
  popUp.close();
  buttons.innerHTML = `
    <div class="section__Butons">
    <a href="/html/transferencias.html"><button class="buttons__space__transfer"><div><i class="fa-solid fa-money-bill-transfer icons"></i></div>Transferir Dinero</button></a>

    <a href="/html/retiros.html"><button class="buttons__space__transfer"><div><i class="fa-solid fa-down-long icons"></i></div>Retirar Dinero </button></a>

    <a href="/html/consignacion.html"><button class="buttons__space__transfer"><div><i class="fa-solid fa-hand-holding-dollar icons"></i></div>Consignar Dinero</button></a>

    <a href="/html/movimientos.html"><button class="buttons__space__transfer"><div><i class="fa-solid fa-receipt icons"></i></div> Movimientos</button></a>
    </div>
    `;
};

// const iniciarSesion = () => {
//   const usuarioSesion = usuario.value;
//   const contraseñaSesion = contraseña.value;

//   const usuarioEncontrado = users.find(
//     (user) =>
//       user.nombre === usuarioSesion && user.contraseña === contraseñaSesion
//   );

//   console.log(usuarioEncontrado);
//   console.log(usuarioSesion);
//   console.log(contraseñaSesion);

//   if (usuarioEncontrado) {
//     inicioSesion = usuarioEncontrado;
//     intentosInicio = 0;
//     popUp.close();
//     mostrarBotones();
//   } else {
//     intentosInicio++;
//     if (intentosInicio >= maximoIntentosInicio) {
//       alert("error ");
//     } else {
//       popUp.close();
//       alert("error Definitivo");
//     }
//   }
// };


console.log(users.nombre)



