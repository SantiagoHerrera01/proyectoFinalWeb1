const popUp = document.getElementById("login__popUp")
const btnIniciarSesion = document.getElementById("button__Iniciar__sesion");
const btnIniciarSesionPopUp = document.getElementById("IniciarSesion")
const buttons =document.getElementById("buttons")

btnIniciarSesion.addEventListener("click", ()=>{
    popUp.showModal()
})






const iniciarSesion = ()=>{
    popUp.close()
    buttons.innerHTML=
    `
    <button class="buttons__space__transfer"><div><i class="fa-solid fa-money-bill-transfer icons"></i></div>Transferir Dinero</button>
    <button class="buttons__space__transfer"><div><i class="fa-solid fa-down-long icons"></i></div>Retirar Dinero </button>
    <button class="buttons__space__transfer"><div><i class="fa-solid fa-hand-holding-dollar icons"></i></div>Consignar Dinero</button>
    <button class="buttons__space__transfer"><div><i class="fa-solid fa-receipt icons"></i></div> Movimientos</button>
    `

    buttons.appendChild(buttons)
}