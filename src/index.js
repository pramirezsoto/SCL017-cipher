import cipher from './cipher.js';

var boton1 = document.getElementById("cifrar");
var boton2 = document.getElementById("descifrar");

boton1.addEventListener("click", elcifrado);
boton2.addEventListener("click", eldescifrado);

function elcifrado() {
    // Se obtiene el valor de la caja de texto que tiene el desplazamiento
    var fijo = parseInt(document.getElementById("desplazamientos").value, 10);

    // Trae el valor de la caja de texto que tiene el mensaje a descrifar
    var palabra = document.getElementById("mensaje").value;

    // Mandas a cifrar la palabra seg'un el valor fijo
    var palabraCifrada =  cipher.encode(fijo, palabra);
   
    // Se pone la palabra cifrada en la caja de texto
    document.getElementById("otromensaje").value = palabraCifrada;
}

function eldescifrado() {
    // Se obtiene el valor de la caja de texto que tiene el desplazamiento
    var fijo = parseInt(document.getElementById("desplazamientos").value, 10);

    // Trae el valor de la caja de texto que tiene el mensaje a descrifar
    var palabra = document.getElementById("mensaje").value;

    // Mandas a cifrar la palabra seg'un el valor fijo
    var palabraDescifrada =  cipher.decode(fijo, palabra);
    
    // Se pone la palabra cifrada en la caja de texto
    document.getElementById("otromensaje").value = palabraDescifrada;
}
