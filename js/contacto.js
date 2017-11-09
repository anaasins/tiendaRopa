
//Funcion para validar si lo que escribimos en los fomularios es lo que tiene que ser
function validarTexto(){
          /*Variables que guardan los valores de los campos*/
          nombre1 = document.getElementById("resultadonom").value;
          telefono1 = document.getElementById("resultadotlf").value;
          //Primer if para comprobar que el nombre solo hay letras
          if (!/^([a-zA-Z])*$/.test(nombre1)){
            nombre1 = document.getElementById("resultadonom");
            color=nombre1.style.background = "red";
            var return1="return false";
          }
          //Segundo if para comprobar que el telefono solo hay numeros
          if (!/^([0-9])*$/.test(telefono1)){
            telefono1 = document.getElementById("resultadotlf");
            color=telefono1.style.background = "red";
            var return2="return false";
      }else {
        return3="return true";
      }
      //If final para que si en alguno de los dos if son falsos no pueda enviar
      if (return1=="return false" || return2=="return false") {
        return false;
      }else if (return3=="return true") {
        return true;
      }
        }

function imprimeMapa() {
  //creamos el div donde ira el mapa y le damos el css deseado.
  var mapa= document.createElement('div');
  mapa.id='mapa';
  mapa.style.width='550px';
  mapa.style.height='350px';
  mapa.style.marginTop= '100px';
  mapa.style.marginLeft= '650px';
  //le decimos donde ira situado el div del mapa
  document.getElementById('contenedor').appendChild(mapa);

  //creamos las coordenadas que queremos que se vean
  var coordenadas= new google.maps.LatLng(39.3935163, -0.4137748,17);
  //opciones de visualizacion del mapa
  var opciones= {
    zoom: 15,
    center: coordenadas,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  }
  //creamos un objeto mapa de google con el div y las opciones
  var objetoMapa= new google.maps.Map(mapa, opciones);

  var marcador = new google.maps.Marker({
    position: coordenadas,
    map: objetoMapa,
    title: 'Estas aqui'
  });
}
