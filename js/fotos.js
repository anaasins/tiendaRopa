function fotosGrandes(elemento) {
  //cogemos el id del elemento que esta llamando a la funcion
  var foto= document.getElementById(elemento.id);
  //cambiamos el css para que sea mas grande
  foto.style.width='300px';
  foto.style.height='auto';
  //creamos un parrafo para poner el precio debajo de la imagen
  var precio= document.createElement('h3');
  //creamos el contenido que habra en el parrafo dependiendo de cada prenda
  if (elemento.id=='fotoh1' || elemento.id=='fotom1') {
    var contenido= document.createTextNode('25,75€');
  }else if (elemento.id=='fotoh2' || elemento.id=='fotom2') {
    var contenido= document.createTextNode('30€');
  }else if (elemento.id=='fotoh3' || elemento.id=='fotom3') {
    var contenido= document.createTextNode('28,99€');
  }else if (elemento.id=='fotoh4' || elemento.id=='fotom4') {
    var contenido= document.createTextNode('20,65€');
  }else if (elemento.id=='fotoh5' || elemento.id=='fotom5') {
    var contenido= document.createTextNode('15,99€');
  }else if (elemento.id=='fotoh6' || elemento.id=='fotom6') {
    var contenido= document.createTextNode('19.90€');
  }

  //decir que el contneido que hemos definido va dentro del h3 del precio
  precio.appendChild(contenido);
  //cogemos el contenedor donde ira nuestro h3
  var div= document.getElementById('contenedor'+elemento.id);
  //metemos el h3 dentro del contenedot
  div.appendChild(precio);
  //damos id y estilo al contenedor
  precio.id='precio';
  precio.style.color='white';
  precio.style.marginLeft='150px';
  precio.style.fontSize='40px';
}
function fotosPequenas(elemento) {
  //cogemos la foto por su id
  var foto= document.getElementById(elemento.id);
  //le devolvemos a la foto el estilo original
  foto.style.width='220px';
  foto.style.height='auto';
  //borramos le h3 del precio que habiamos creado.
  var borrar= document.getElementById('precio');
  borrar.parentNode.removeChild(borrar);
}
