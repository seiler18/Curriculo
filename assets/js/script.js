//-----------------------------------------------------------Desaparecer y aparecer en mi navbar
/* 
$("h1").fadeOut(3000).fadeIn(3000);
$("li1").fadeOut(3000).fadeIn(3000);
$("#ejercicio1").fadeOut(2500).fadeIn(1500); */

//-----------------------------------------------------------Cambiar tamaño en la seccion footer, y esconde el  boton
/* $("#cambiarTamano").click(function() {
    $("#footer").animate({fontSize:'2em'},2500);
    $("#cambiarTamano").click(function(){
    $("#footer").animate({fontSize:'1em'},1500);
});

}); */

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
        $("#Conocimiento").toggle();
    });
});

$(document).ready(function() {
    $("#carta-trabajo").hide();
    $("#OcultarCartaTrabajo").click(function(){
        $("#carta-trabajo").toggle();
    });
});

$(document).ready(function() {
    $("#certificados-nestle").hide();
    $("#OcultarCertificadosNestle").click(function(){
        $("#certificados-nestle").toggle();
    });
});

//para mostrar el conocimiento dando click en el navbar
$("#mostrarConocimiento").click(function() {
    $("#Conocimiento").toggle();
});

//para que inicie la pagina con los certificados ocultos
$(document).ready(function() {
    $("#Certificados").hide();
    $("#Ocultar").click(function(){
        $("#Certificados").toggle();
    });
    /* $(this).hide().delay(1500); */
});

//para mostrar el certificado dando click en el navbar
$("#mostrarCertificados").click(function() {
    $("#Certificados").toggle();
});

//para que inicie la pagina con las experiencias ocultas
$(document).ready(function() {
    $("#Experiencia").hide();
    $("#Ocultar2").click(function(){
        $("#Experiencia").toggle();
    });
});

//para mostrar las experiencias dando click en el navbar
$("#mostrarExperiencia").click(function() {
    $("#Experiencia").toggle();
});


//Certificado de Free web Desing
function verCertificado() {
    window.open("https://www.freecodecamp.org/certification/ichbinseiler/responsive-web-design", "_blank");
  }

  //Certificado de Free web Desing
function verCertificadoJS() {
    window.open("https://www.freecodecamp.org/certification/ichbinseiler/javascript-algorithms-and-data-structures", "_blank");
  }

  //Certificado de OCI
  function verCertificadoOCI() {
    window.open("https://catalog-education.oracle.com/pls/certview/sharebadge?id=0EE370D017FDDE5093D72D0FAAA09E4B5AD04E6D9E4E32BFFC3537ECDA237F0B", "_blank");
  }


  const carousel = document.querySelector('.logos-carousel');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  
  // Ancho de cada elemento (ajústalo si cambias el diseño)
  const itemWidth = carousel.querySelector('.logo-item').offsetWidth + 20; // incluye el gap
  
  // Desplazamiento a la izquierda
  prevButton.addEventListener('click', () => {
    carousel.scrollBy({
      left: -itemWidth,
      behavior: 'smooth',
    });
  });
  
  // Desplazamiento a la derecha
  nextButton.addEventListener('click', () => {
    carousel.scrollBy({
      left: itemWidth,
      behavior: 'smooth',
    });
  });
  