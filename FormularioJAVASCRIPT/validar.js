function validar(){
    var nombre, apellidos, correo, usuario, clave, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("pass").value;
    telefono = document.getElementById("telefono").value;

    expresion = /\w+@\w+\.+[a-z]/;  // declaramos una expresion regular para validar el campo correo electrónico

    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave ==="" || telefono ===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else if (apellidos.length>80){
        alert("El apellidos son muy largos");
        return false;
    }
    else if (correo.length>100){
        alert("El correo es muy largo");
        return false;
    }
    else if (!expresion.test(correo)){
        alert("El correo no es válido");
        return false;
    }
    else if (usuario.length>20 || clave.length>20){
        alert("El usuario y la contraseña sólo deben tener 20 caracteres como máximo");
        return false;
    }
    else if (telefono.length>15){
        alert("El teléfono es muy largo");
        return false;
    }
    else if (isNaN(telefono)){
        alert("El teléfono ingresado no es número");
        return false;
    }

    var saludo = "Bienvenido " + nombre + apellidos + "!!!. Gracias por registrarte. Tu Nombre de Usuario es: " + usuario + " y tu contraseña es: " + clave + ".";
    
    alert(saludo);
}


  
    
  
      

