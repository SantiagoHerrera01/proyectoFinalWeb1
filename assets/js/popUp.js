const popUp = document.getElementById("login__popUp");
const btnIniciarSesion = document.getElementById("button__Iniciar__sesion");
const btnIniciarSesionPopUp = document.getElementById("IniciarSesion");
const buttons = document.getElementById("buttons");
const popUpDos = document.getElementById("popUpDos");
const buttonRegister = document.getElementById("registrarU");
const buttonCancel = document.getElementById("buttonCancel");

const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("password");

// const users = JSON.parse(localStorage.getItem('users')) || [];

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
const loginForm = document.getElementById("loginForm") 

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const correo = document.getElementById("usuario").value
    const contraseña = document.getElementById("password").value
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(user=> user.correo === correo && user.password === contraseña)

    if (validUser){
        return alert("Usuario y/o contraseña incorrectos")
    }else{
        alert(`Bienvenido`)
    mostrarBotones()
    popUp.close() 
    console.log(users)
    // else if(validUser){
    //     inicioSesion = validUser;
    //     intentosInicio = 0;
    //     popUp.close();
    //     mostrarBotones();
    // }
    
}
})



const registrarUsuarioVista = () => {
    
  popUpDos.innerHTML = `
    <h2 class="login__title">Registrar Usuario</h2>

    <form action="" class="login__form" id="registerForm">
        <div class="login__input">
            <input type="text" placeholder="Nombre" id="name" required>
        </div>
        <div class="login__input">
            <input type="email" placeholder="Correo" id="email" required>
        </div>
        <div class="login__input">
            <input type="number" placeholder="Numero de cuenta" id="numberCount" required>
        </div>
        <div class="login__input">
            <input type="password" placeholder="Contraseña" id="password" required>
        </div>

        <input type="submit" class="login__buttons__form" id="registrarUsuario" value="Registrarse"> 

        <input type="button" class="login__buttons__form" id="buttonCancelRegister" value="Cancelar"> 
    </form>
    `;

  const buttonCancelRegister = document.getElementById("buttonCancelRegister");

  buttonCancelRegister.addEventListener("click", (e) => {
    e.preventDefault();
    popUpDos.close();
  });

  const registrarUsuario = document.getElementById("registerForm");
  registrarUsuario.addEventListener("submit", (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const nombre = document.getElementById("name").value;
    const correo = document.getElementById("email").value;
    const numeroCuenta = document.getElementById("numberCount").value;
    const contraseña = document.getElementById("password").value;
try{
    const isUserRegistered = users.find((user) => user.correo === correo); // Corregido el campo para comparar
    if (isUserRegistered) {
      return alert("El usuario ya ha sido registrado");
    }
    users.push({ nombre: nombre, correo: correo,numeroCuenta: numeroCuenta, saldo:200000, contraseña: contraseña });
    localStorage.setItem("users", JSON.stringify(users)); // Corregido para pasar el arreglo 'users'
    alert("Registro exitoso")
    console.log(users)
    
    }catch{
        alert.error('Error parsing JSON:', error)
    }
  });
  
};
// console.log(users)

