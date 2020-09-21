//-----------------------------------------------------------Desaparecer y aparecer en mi navbar

$("h1").fadeOut(3000).fadeIn(3000);
$("li1").fadeOut(3000).fadeIn(3000);
$("#ejercicio1").fadeOut(2500).fadeIn(1500);

//-----------------------------------------------------------Cambiar tamaño en la seccion footer, y esconde el  boton
$("#cambiar").click(function() {
    $("#footer").animate({fontSize:'2em'},2500);
    $(this).hide().delay(1500);
});





