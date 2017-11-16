function carrito(elemento) {
  var foto= document.getElementById(elemento.id);
  var prods = localStorage.getItem("productos");
  var prods2 = prods.split(",");

  prods2.push(foto.id);

  localStorage.setItem("productos", prods2);

}

function llamarfuncion() {
  //decir cuando queremos que se dispare el evento. Se disparara cuando llegue a esta linea
  document.dispatchEvent(nuevoEvento);
}

//crear nuevo evento
var nuevoEvento= new Event('imprime');
//escucharlo y darle una funcion
document.addEventListener('imprime', imprimeCarrito);
function imprimeCarrito() {
  var productos= localStorage.getItem('productos');
  var arrayProductos= productos.split(",");
  for (var i = 0; i < arrayProductos.length; i++) {
    var foto= document.createElement('p');
    foto.style.display='inline-block';
    var div= document.getElementById('imagenes');
    div.appendChild(foto);
    foto.innerHTML="<img class='fotoh' id='"+arrayProductos[i]+"' src='img/"+arrayProductos[i]+".jpg'></img>"
  }
}
