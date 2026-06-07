var a = false;

let box = document.getElementById('box');
box.addEventListener('click', function () {

    var rut, nombre, apellidos, edad, correo, especialidad, fecha, hora;
    rut = document.getElementById("rut").value;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    especialidad = document.getElementById("especialidad").value;
    fecha = document.getElementById("fecha").value;
    hora = document.getElementById("hora").value;
    expresionCORREO = /\w+@\w+\.+[a-z]/;
    expresionNOMBRE = (/[a-z]/);
    expresionAPELLIDOS = (/[a-z]/);
    expresionEDAD = /^([0-9])*$/;
    expresionRUT = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
    expresionFECHA = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;

    /* -----DETERMINAR QUE TODOS LOS CAMPOS ESTEN LLENOS----- */

    if (rut === "" || nombre === "" || apellidos === "" || edad === "" || correo === "" || especialidad === "" || fecha === "" || hora === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }
    
    /* -----DETERMINAR QUE NO SEA MAYOR DE ----- */
    else if (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    }
    /* -----DETERMINAR QUE SOLO SEAN NUMEROS LA EDAD----- */
    else if (!expresionEDAD.test(edad)) {
        alert("Ingrese solo numeros");
        return false;
    }

    /* -----DETERMINAR QUE SOLO SEAN LETRAS----- */
    else if (!expresionNOMBRE.test(nombre)) {
        alert("Ingrese solo letras en el nombre");
        return false;
    }

    /* -----VALIDANDO EL RUT----- */
    else if (!expresionRUT.test(rut)) {
        alert("Ingrese el rut en formato correcto");
        return false;
    }

    /* -----DETERMINAR QUE SOLO SEAN LETRAS----- */
    else if (!expresionAPELLIDOS.test(apellidos)) {
        alert("Ingrese solo letras en el apellido");
        return false;
    }


    /* -----DETERMINAR QUE NO SEA MAYOR DE ----- */
    else if (apellidos.length > 80) {
        alert("El apellidos son muy largos");
        return false;
    }
    /* -----DETERMINAR QUE NO SEA MAYOR DE ----- */
    else if (correo.length > 100) {
        alert("El correo es muy largo");
        return false;
    }
    /* -----DETERMINAR QUE EL CORREO SEA CORRECTO----- */
    else if (!expresionCORREO.test(correo)) {
        alert("El correo no es válido");
        return false;

    }

    /* -----VALIDANDO FORMATO CORRECTO DE FECHA----- */
    else if (!expresionFECHA.test(fecha)) {
        alert("Ingrese fecha en formato correcto");
        return false;
    }

    else {
        a = true;

    }


});

box.addEventListener('click', function () {
    if (a == true) {
        var nombre, apellidos, correo, especialidad, fecha, hora;

        nombre = document.getElementById("nombre").value;
        apellidos = document.getElementById("apellidos").value;
        correo = document.getElementById("correo").value;
        especialidad = document.getElementById("especialidad").value;
        fecha = document.getElementById("fecha").value;
        hora = document.getElementById("hora").value;

        var saludo = "Estimado(a) " + nombre + " " + apellidos + " su hora para " + especialidad + " ha sido reservada para el día " + fecha + " a las " + hora + ". Además, se le envió un mensaje a su correo " + correo + " con el detalle de su cita. Gracias por preferirnos.";
        alert(saludo);
    }
});

