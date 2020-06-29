//Desaparecer y aparecer en mi navbar

$("h1").fadeOut(3000).fadeIn(3000);
$("li1").fadeOut(3000).fadeIn(3000);
$("#ejercicio1").fadeOut(2500).fadeIn(1500);

//Cambiar tamaño en la seccion footer, y esconde el  boton
$("#cambiar").click(function() {
    $("#footer").animate({fontSize:'2em'},2500);
    $(this).hide().delay(1500);
});


//PARA EJERCICIO 1

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

//PARA EJERCICIO 1



//PARA EJERCICIO 2

$(document).ready(function () {
    $('#btnBuscarPokemon').click(function () {
        getPokemones1();
        console.log("Se listan pokemones");
    });
});


function getPokemones1() {
   
    
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10",
        type:"GET",
        dataType: 'json',
        success: function (data) {
            data.results.forEach(element => {
                var optionText = element.name;
                var optionValue = element.url;

      $('#Pokemon').append(`<option value="${optionValue}">
      ${optionText}</option>)`
      );
    });

  
        }
        
    });
    
}