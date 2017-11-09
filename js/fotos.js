function fotosGrandes(elemento) {
  //cogemos el id del elemento que esta llamando a la funcion
  var foto= document.getElementById(elemento.id);
  //cambiamos el css para que sea mas grande
  foto.style.width='300px';
  foto.style.height='auto';
  //creamos un parrafo para poner el precio debajo de la imagen
  var precio= document.createElement('h3');
  //creamos el contenido que habra en el parrafo
  if (elemento.id=='fotoh1') {
    var contenido= document.createTextNode('25,75€');
  }else if (elemento.id=='fotoh2') {
    var contenido= document.createTextNode('30€');
  }else if (elemento.id=='fotoh3') {
    var contenido= document.createTextNode('28,99€');
  }else if (elemento.id=='fotoh4') {
    var contenido= document.createTextNode('20,65€');
  }else if (elemento.id=='fotoh5') {
    var contenido= document.createTextNode('15,99€');
  }else if (elemento.id=='fotoh6') {
    var contenido= document.createTextNode('19.90€');
  }

  precio.appendChild(contenido);
  var div= document.getElementById('contenedor'+elemento.id);
  div.appendChild(precio);
  precio.id='precio';
  precio.style.color='white';
  div.style.textAlign='center';
  precio.style.fontSize='40px';
}
function fotosPequenas(elemento) {
  var foto= document.getElementById(elemento.id);
  foto.style.width='220px';
  foto.style.height='auto';

  var borrar= document.getElementById('precio');
  borrar.parentNode.removeChild(borrar);
}
