
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
