//-----------------------------------------------------------Desaparecer y aparecer en mi navbar
/* 
$("h1").fadeOut(3000).fadeIn(3000);
$("li1").fadeOut(3000).fadeIn(3000);
$("#ejercicio1").fadeOut(2500).fadeIn(1500); */

//-----------------------------------------------------------Cambiar tamaño en la seccion footer, y esconde el  boton
$("#cambiarTamano").click(function() {
    $("#footer").animate({fontSize:'2em'},2500);
    $("#cambiarTamano").click(function(){
    $("#footer").animate({fontSize:'1em'},1500);
});

});

$(document).ready(function() {
    $("#SAPConocimientos").hide();
    $("#MostrarSAP").click(function(){
        $("#SAPConocimientos").show();
        $("#MostrarSAP").click(function(){
            $("#SAPConocimientos").hide();
        });
    });
    
});
//para que inicie la pagina con los conocimientos ocultos
$(document).ready(function() {
    $("#Conocimiento").hide();
    $("#Ocultar3").click(function(){
        $("#Conocimiento").show();
    });
    /* $(this).hide().delay(1500); */
});

//para mostrar el conocimiento dando click en el navbar
$("#mostrarConocimiento").click(function() {
    $("#Conocimiento").show();
});

//para que inicie la pagina con los certificados ocultos
$(document).ready(function() {
    $("#Certificados").hide();
    $("#Ocultar").click(function(){
        $("#Certificados").show();
    });
    /* $(this).hide().delay(1500); */
});

//para mostrar el certificado dando click en el navbar
$("#mostrarCertificados").click(function() {
    $("#Certificados").show();
});

//para que inicie la pagina con las experiencias ocultas
$(document).ready(function() {
    $("#Experiencia").hide();
    $("#Ocultar2").click(function(){
        $("#Experiencia").show();
    });
    /* $(this).hide().delay(1500); */
});

//para mostrar las experiencias dando click en el navbar
$("#mostrarExperiencia").click(function() {
    $("#Experiencia").show();
});



