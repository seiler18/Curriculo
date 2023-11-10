$(document).ready(function () {
 // Actualizar el estado del botón de analizar al cambiar el contenido del campo de entrada
 $('#imageUrl').on('input', function () {
   const imageUrl = $(this).val();
   const analyzeButton = $('#analyzeButton');

   // Habilitar el botón solo si la URL no está vacía
   analyzeButton.prop('disabled', imageUrl.trim() === '');
 });

 // Deshabilitar el botón al cargar la página si el campo de entrada está vacío
 const imageUrl = $('#imageUrl').val();
 $('#analyzeButton').prop('disabled', imageUrl.trim() === '');

 // Manejar el clic en el botón de analizar
 $('#analyzeButton').on('click', function () {
   const imageUrl = $('#imageUrl').val();

   // Mostrar indicador de carga
   $('#loadingIndicator').show();

     // Realizar la llamada a la API de Computer Vision
     $.ajax({
       url: 'https://jsservicepractica.cognitiveservices.azure.com/vision/v3.0/analyze?visualFeatures=Description,Tags',
       method: 'POST',
       contentType: 'application/json',
       headers: {
         'Ocp-Apim-Subscription-Key': '143a64b2737340f98cb8ade7e062b5e3', // Reemplazar con tu clave
       },
       data: JSON.stringify({ url: imageUrl }),
       success: function (data) {
         // Ocultar indicador de carga
         $('#loadingIndicator').hide();

         // Manejar los resultados aquí
         console.log('Resultados del análisis:', data);

         // Mostrar los resultados en el contenedor
         $('#resultsContainer').html('<h2>Resultados del análisis:</h2><pre class="resultText">' + JSON.stringify(data, null, 2) + '</pre>');

         // Mostrar la imagen analizada
         if (data.description && data.description.captions && data.description.captions[0]) {
           const analyzedImageUrl = imageUrl; // Reemplazar con la URL de la imagen analizada
           $('#resultsContainer').append('<img src="' + analyzedImageUrl + '" alt="Imagen Analizada" style="max-width:100%;margin-top:20px;">');
         }
       },
       error: function (error) {
         console.error('Error en la llamada a la API de Computer Vision:', error);
         // Ocultar indicador de carga en caso de error
         $('#loadingIndicator').hide();
         // Mostrar un mensaje de error al usuario
         alert('Error en la llamada a la API de Computer Vision. Por favor, verifica la URL de la imagen e inténtalo nuevamente.');
       }
     });
   });
 });