function carrito(elemento) {
  if (!localStorage.productos) {
    localStorage.productos=elemento.id;
  }else {
    var foto= document.getElementById(elemento.id);
    var prods = localStorage.getItem("productos");
    var prods2 = prods.split(",");

    prods2.push(foto.id);

    localStorage.setItem("productos", prods2);
  }
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

// Funcion de contador que borra todo cuando termina la cuenta atras
var toHour=0;
var toMinute=10;
var toSecond=0;
function cuentaAtras()
{

	toSecond=toSecond-1;
	if(toSecond<0)
	{
		toSecond=59;
		toMinute=toMinute-1;
	}
	form.second.value=toSecond;

	if(toMinute<0)
	{
		toMinute=59;
		toHour=toHour-1;
	}
	form.minute.value=toMinute;

	form.hour.value=toHour;
	if(toHour<0)
	{
		//final
		form.second.value=0;
		form.minute.value=0;
		form.hour.value=0;
	}else{
		setTimeout("cuentaAtras()",1000);
	}
  //If para cundo se termine el tiempo
  if (toSecond==0 && toMinute==0 && toHour==0) {
    localStorage.clear();
    window.location='carrito.html';
  }

}

//Boton para borrar el localStorage
function borrar(){
  localStorage.clear();
  window.location='carrito.html';
}
