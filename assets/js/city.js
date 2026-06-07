//-----------------------------------------------------------Desaparecer y aparecer en mi navbar

/* $("h1").fadeOut(3000).fadeIn(3000);
$("li1").fadeOut(3000).fadeIn(3000);
$("#ejercicio1").fadeOut(2500).fadeIn(1500); */

//-----------------------------------------------------------Cambiar tamaño en la seccion footer, y esconde el  boton
$("#cambiarTamano").click(function() {
    $("#footer").animate({fontSize:'2em'},2500);
    $("#cambiarTamano").click(function(){
    $("#footer").animate({fontSize:'1em'},1500);
});
    /* $(this).hide().delay(1500); */
});


//-----------------------------------------------------------PARA EJERCICIO 1

var miDataTable = null;

$(document).ready(function () {
    miDataTable = $('#tblData').DataTable({
        paging: false,
        searching: false
    });
    $('#btnBuscar').click(function () {
        var citiesJsonObject = null;
        getCities();
        console.log("Se estan leyendo los datos");
    });
});

function getCities() {
    var respuesta = null;

    $.ajax({
        url: "https://api.meetup.com/2/cities",
        type:"GET",
        dataType: 'jsonp',
        success: function (data) {
            miDataTable.destroy();
            miDataTable = $('#tblData').DataTable({
                data: data.results,
                columns: [
                    { "data": "zip" },
                    { "data": "country" },
                    { "data": "localized_country_name" },
                    { "data": "city" }
                ],
                paging: true,
                //pagingType: "full_numbers",
                pagingType: "simple_numbers",
                searching: true
            });
        }
    });




}

//-----------------------------------------------------------PARA EJERCICIO 1
