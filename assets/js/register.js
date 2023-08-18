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
              <input type="password" placeholder="Contraseña" id="password2" required>
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
    //   const users = JSON.parse(localStorage.getItem('users'))|| [];

      const nombre = document.getElementById("name").value;
      const correo = document.getElementById("email").value;
      const numeroCuenta = document.getElementById("numberCount").value;
      const contraseña = document.getElementById("password2").value;

  try{

    if(localStorage.getItem(correo)== null){
      const users = { nombre: nombre, correo: correo, numeroCuenta: numeroCuenta, saldo:200000, contraseña: contraseña};

      localStorage.setItem(correo, JSON.stringify(users));
      alert("Registro exitoso")
      popUpDos.close()
    }
      }catch (error){
          console.log("Error",error)
      }
    });
    
  };

  let movimientos =[]

const agregarMovimiento = (tipo, cantidad) => {
  const movimiento = {
    tipo,
    cantidad,
    fecha: new Date().toLocaleString(),
  };
  movimientos.push(movimiento)

  console.log(movimientos);
};

const pintarMovimientos = () => {
  const movimientosContainer = document.getElementById("movimientosContainer");
  let movimientosHTML = ""; 

  for (const movimiento of movimientos) {
    movimientosHTML += `
      <div class="movimiento">
        <p class="movimiento__P">Tipo: ${movimiento.tipo}</p>
        <p>Cantidad: ${movimiento.cantidad}</p>
        <p>Fecha: ${movimiento.fecha}</p>
      </div>
    `;
  }

  movimientosContainer.innerHTML = movimientosHTML;
};

