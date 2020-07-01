//-----------------------------------------------------------Desaparecer y aparecer en mi navbar

$("h1").fadeOut(3000).fadeIn(3000);
$("li1").fadeOut(3000).fadeIn(3000);
$("#ejercicio1").fadeOut(2500).fadeIn(1500);

//-----------------------------------------------------------Cambiar tamaño en la seccion footer, y esconde el  boton
$("#cambiar").click(function() {
    $("#footer").animate({fontSize:'2em'},2500);
    $(this).hide().delay(1500);
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



//-----------------------------------------------------------PARA EJERCICIO 2 POKEDEX

$(document).ready(function getPokemon() {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/generation/1',
        success: function (respuesta) {
            console.log(respuesta);
            var listaUsuarios = $("#selPoke");
            $.each(respuesta.pokemon_species, function (index, elemento) {
                listaUsuarios.append(
                    '<option value=' + index + '>' + elemento.name+'</option>'
                );
            });

            
        },
        error: function () {
            console.log("No se ha podido obtener la información");
        }
    });
});

$(document).ready(function getHabilidades() {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/generation/1',
        success: function (respuesta) {
            console.log(respuesta);
            var listaHabilidades = $("#Habilidades");
            $.each(respuesta.moves, function (index, elemento) {
                listaHabilidades.append( 
                '<option value='+ index , elemento.name +'</option>');
            });

            
        },
        error: function () {
            console.log("No se ha podido obtener la información");
        }
    });
});


function datosPokemon(consulta) {
	$.ajax({
		url: 'https://pokeapi.co/api/v2/pokemon/'+consulta,
		type: 'GET',
		dataType: 'html',
		data: { consulta: consulta },
	})

		.done(function res(respuesta) {
			$("#dato1").html(respuesta.pokemon_species);
		})

		.fail(function () {
			console.log("error");
		})
}


function HabilidadesPokemon(consulta) {
	$.ajax({
		url: 'https://pokeapi.co/api/v2/generation/1',
		type: 'GET',
		dataType: 'html',
		data: { consulta:consulta},
	})

		.done(function res(respuesta) {
			$("#datos3").html(respuesta.moves);
		})

		.fail(function () {
			console.log("error");
		})
}






$(document).bind('change keyup', '#selPoke',   function () {
    var valor = $('#selPoke').val();
    var valor2 = $('#selPoke option:selected').text();
    var valor3 = $('#Habilidades').val();
    var valor4= $();
    var dato1 = $("#datos");
    var dato2 = $("#datos2");
    var dato3 = $("#datos3");
    var dato4 = $("#datos4");
	if (valor != null || valor != "") {
        alert("Ha Seleccionado el pokemon con ID : " + valor)
        console.log(valor);
        dato1.html("<p>ID Pokemon "+valor+"</p>");
        dato2.html("<h4>"+valor2+"</h4>");       
        dato3.html("Tiene las siguientes Habilidades : " +valor3 );
        //imagen momentanea de un pokemon mientras hago la funcion
        dato4.html("Imagen del Pokemon"+ `<br></br>`+`` + valor4);
        //datosPokemon(valor);  
	} else {
        
            alert("Debe seleccionar un Pokemon")
        console.log("Error");
        
    }
    


    
});
    
