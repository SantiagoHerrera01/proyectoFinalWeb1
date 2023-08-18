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

  buttons.style.display = "flex"
};

const buttonRetirar = document.getElementById("buttonRetirar")
const buttonTransferencia = document.getElementById("buttonTransferencia")
const buttonConsignacion = document.getElementById("buttonConsignacion")
const buttonMovimientos = document.getElementById("buttonMovimientos")

const botonVolverRetiro = document.getElementById("volver")
const botonVolverConsignacion = document.getElementById("volverC")
const botonVolverTransferencia = document.getElementById("volverT")
const botonVolverMovimientos = document.getElementById("volverM")

const index = document.getElementById("index")
const retirar = document.getElementById("retirar")
const consignacion = document.getElementById("consignacion")
const transferencias = document.getElementById("transferencias")
const Movimientos = document.getElementById("Movimientos")

if(buttonRetirar){

    buttonRetirar.addEventListener("click", () =>{
      index.style.display = "none"
      retirar.style.display = "block"
    })
}

if(buttonConsignacion){

  buttonConsignacion.addEventListener("click", () =>{
    index.style.display = "none"
    consignacion.style.display = "block"
  })
}

if(buttonTransferencia){

  buttonTransferencia.addEventListener("click", () =>{
    index.style.display = "none"
    transferencias.style.display = "block"
  })
}

if(buttonMovimientos){

  buttonMovimientos.addEventListener("click", () =>{
    index.style.display = "none"
    Movimientos.style.display = "block"
  })
}

if(botonVolverRetiro || botonVolverConsignacion || botonVolverTransferencia || botonVolverMovimientos){

  botonVolverRetiro.addEventListener("click", () =>{
      // index.replaceWith(retirar)
      index.style.display = "block"
      retirar.style.display = "none"
    })

    botonVolverConsignacion.addEventListener("click", () =>{
      // index.replaceWith(retirar)
      index.style.display = "block"
      consignacion.style.display = "none"
    })

    botonVolverTransferencia.addEventListener("click", () =>{
      // index.replaceWith(retirar)
      index.style.display = "block"
      transferencias.style.display = "none"
    })

    botonVolverMovimientos.addEventListener("click", () =>{
      // index.replaceWith(retirar)
      index.style.display = "block"
      Movimientos.style.display = "none"
    })
}



