//-----------------------------------------------------------Desaparecer y aparecer en mi navbar

$("h1").fadeOut(3000).fadeIn(3000);
$("li1").fadeOut(3000).fadeIn(3000);
$("#ejercicio1").fadeOut(2500).fadeIn(1500);

//-----------------------------------------------------------Cambiar tamaño en la seccion footer, y esconde el  boton
$("#cambiar").click(function() {
    $("#footer").animate({fontSize:'2em'},2500);
    $(this).hide().delay(1500);
});

$(document).ready(function getPokemon() {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150',
        success: function (respuesta) {
            console.log(respuesta);
            var listaPokemon= $("#selPoke");
            $.each(respuesta.results, function (index, elemento) {
                listaPokemon.append(
                    '<option value=' + index + '>' + elemento.name+'</option>'
                );
            });

            
        },
        error: function () {
            console.log("No se ha podido obtener la información");
        }
    });
});
//LLENO DATOS DE ID,NOMBRE IMAGEN SEGUN SELECCION DE COMBOBOX
$(document).bind('change keyup', '#selPoke', function () {

    var valor = $('#selPoke').val();
    var valor2 = $('#selPoke option:selected').text();
    var valor = Number($('#selPoke').val());
    var numero = 1;
    resultado = valor+numero;
    var dato1 = $("#datos");
    var dato2 = $("#datos2");
    var dato3 = $("#datos3");
    var dato4 = $("#datos4");
    var imgfront = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+resultado+".png"
    var imgback = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+resultado+".png"
	if (valor != null || valor != "") {
        console.log(valor);
        dato1.html("<p>ID Pokemon "+valor+"</p>");
        dato2.html("<h4>"+valor2+"</h4>");
        dato3.html('<img src="'+imgfront+'" height="100">')
        dato4.html('<img src="'+imgback+'" height="100">')
        //datosPokemon(valor);
	} else {
        console.log("Error");
        
	}
});

/////
function buscar_datos(numpokemon) {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/move/'+numpokemon,
        type:'GET',
        success: function (respuesta) {
            console.log(respuesta);
            $('#datos7').html("<p> Movimientos : "+respuesta.names[5].name+"</p>");      
        },
        error: function () {
            console.log("Error");
        }
    });
}

function buscar_abilities(numpokemon) {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/ability/'+numpokemon,
        type:'GET',
        success: function (respuesta) {
            console.log(respuesta);
            $('#datos8').html("<p>Habilidad : "+respuesta.names[5].name+"</p>");      
        },
        error: function () {
            console.log("Error");
        }
    });
}

//SEGUN LA SELECCION LO MANDO AL AJAX PARA FILTRAR POR POKEMON
$(document).bind('change keyup', '#selPoke', function () {
    var valor = Number($('#selPoke').val());
    var numero = 1;
    numpokemon = valor+numero;
	if (numpokemon != null || numpokemon != "") {
        buscar_datos(numpokemon);
        buscar_abilities(numpokemon);
	} else {
        buscar_datos();
        buscar_abilities();
	}
});
    

    var canvas = document.getElementById("canvas");
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
      
      ctx.beginPath();
      ctx.fillStyle="red";
      ctx.arc(75,75,50,0,Math.PI*2,true); // Círculo externo
      ctx.fillStyle="red";
      ctx.moveTo(110,75);
      ctx.fillStyle="red";
      ctx.arc(75,75,35,0,Math.PI,false);   // Boca (contra reloj)
      ctx.moveTo(65,65);
      ctx.arc(60,65,5,0,Math.PI*2,true);  // Ojo izquierdo
      ctx.moveTo(95,65);
      ctx.arc(90,65,5,0,Math.PI*2,true);  // Ojo derecho
      ctx.stroke();
    }
  
  
