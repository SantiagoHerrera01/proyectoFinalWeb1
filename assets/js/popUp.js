import { months } from "./usuarios";

console.log(months);

// const popUp = document.getElementById("login__popUp")
// const btnIniciarSesion = document.getElementById("button__Iniciar__sesion");
// const btnIniciarSesionPopUp = document.getElementById("IniciarSesion")
// const buttons =document.getElementById("buttons")
// const popUpDos = document.getElementById("popUpDos")
// const buttonRegister = document.getElementById("registrarU")
// const buttonCancel = document.getElementById("buttonCancel")
// const buttonCancelRegister = document.getElementById("buttonCancelRegister")
// const usuario = document.getElementById("usuario");
// const contraseña = document.getElementById("contraseña");

// let inicioSesion;
// let intentosInicio = 0;
// const maximoIntentosInicio = 3;

// console.log({usuarios});

// // const usuarios = [
// //     { usuario: "juan", contraseña: "1204", saldo: "1000", cuenta: "1000637874" },
// //     { usuario: "santiago", contraseña: "1204", saldo: "1500", cuenta: "1000637875" },
// // ];

// btnIniciarSesion.addEventListener("click", ()=>{
//     popUp.showModal()
// })

// buttonCancel.addEventListener("click",(e)=>{
//     e.preventDefault()
//     popUp.close()
// })

// buttonRegister.addEventListener("click",(e)=>{
//     e.preventDefault()
//     popUpDos.showModal()
// })

// const mostrarBotones = ()=>{
    
//     popUp.close()
//     buttons.innerHTML=
//     `
//     <div class="section__Butons">
//     <a href="/html/transferencias.html"><button class="buttons__space__transfer"><div><i class="fa-solid fa-money-bill-transfer icons"></i></div>Transferir Dinero</button></a>

//     <a href="/html/retiros.html"><button class="buttons__space__transfer"><div><i class="fa-solid fa-down-long icons"></i></div>Retirar Dinero </button></a>

//     <a href="/html/consignacion.html"><button class="buttons__space__transfer"><div><i class="fa-solid fa-hand-holding-dollar icons"></i></div>Consignar Dinero</button></a>

//     <a href="/html/movimientos.html"><button class="buttons__space__transfer"><div><i class="fa-solid fa-receipt icons"></i></div> Movimientos</button></a>
//     </div>
//     `
//     buttons.appendChild(buttons)
// }

// const iniciarSesion = ()=>{

//     const usuarioSesion = usuario.value
//     const contraseñaSesion = contraseña.value

//     const usuarioEncontrado = usuarios.find(user => user.usuario === usuarioSesion && user.contraseña === contraseñaSesion);


//     console.log(usuarioEncontrado);
//     // console.log(usuarioSesion);
//     // console.log(contraseñaSesion);

//     if (usuarioEncontrado) {
//         inicioSesion = usuarioEncontrado;
//         intentosInicio = 0;
//         popUp.close()
//         mostrarBotones();
//     } else {
//         intentosInicio++;
//         if (intentosInicio >= maximoIntentosInicio) {
//             alert("error ")
//         } else {
//             popUp.close()
//             alert("error Definitivo")
//         }
//     }
// }

// const registrarUsuario =() =>{ 
//     popUpDos.innerHTML=`
//     <h2 class="login__title">Registrar Usuario</h2>

//     <form action="" class="login__form">
//         <div class="login__input">
//             <input type="text" placeholder="Nombre">
//         </div>
//         <div class="login__input">
//             <input type="text" placeholder="Apellido">
//         </div>
//         <div class="login__input">
//             <input type="email" placeholder="Correo">
//         </div>
//         <div class="login__input">
//             <input type="password" placeholder="Contraseña">
//         </div>

//         <button class="login__buttons__form" id="registrarUsuario"> Registrarse</button>

//         <button class="login__buttons__form" id="buttonCancelRegister"> Cancelar</button>
//     </form>
//     `
//     popUpDos.appendChild(popUpDos)
// }