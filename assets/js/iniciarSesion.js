const loginForm = document.getElementById("loginForm") 


loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const correo = document.getElementById("usuario").value
    const contraseña = document.getElementById("password").value

    const users = JSON.parse(localStorage.getItem(correo))|| null;


    const validUser =(users!== null && users.contraseña === contraseña)
    if (!validUser){
        return alert("Usuario y/o contraseña incorrectos")
    }else{
        alert(`Bienvenido ${users.nombre}`)
    mostrarBotones()
    popUp.close() 
    console.log(users.nombre)
    
}
})