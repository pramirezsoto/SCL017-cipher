import cipher from './cipher.js';

var boton1 = document.getElementById("cifrar");
var boton2 = document.getElementById("descrifrar");

cifrar.addEventListener("click", enviarTexto);
descifrar.addEventListener("click", enviarOtroTexto);

function enviarTexto() {
    var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var fijo = parseInt(document.getElementById("desplazamientos").value, 10);
    var abcLongitud = abc.length;
    var palabra = document.getElementById("mensaje").value;
    palabra = palabra.toUpperCase();
    var largoPalabra = palabra.length;
    var palabraCifrada = "";

    for (var i = 0; i < largoPalabra; i++) {
        var letraPalabra = palabra.charAt(i);
        // nos trae el caracter del indice que es cero y la palabra indicada
        var posicionEnAbc = abc.indexOf(letraPalabra);
        // llama a abc y devuelve al indice con la palabra escrita
        if (posicionEnAbc != -1) {
            // si posicion en abc es -1 no lo tomara en cuenta
            var cantidadAvance = (posicionEnAbc + fijo) % abcLongitud;
            // nos trae el abc y suma el numero con el que se desplazaran las letras mas el residuo de abcLongitud
            palabraCifrada = palabraCifrada + abc.charAt(cantidadAvance);
            // nos da la palabra cifrada 
        }
        else {
            palabraCifrada = palabraCifrada + letraPalabra;
        }
    }
    // muestra en la consola la palabra cifrada
    console.log(palabraCifrada);

    document.getElementById("otromensaje").value= palabraCifrada;
}


function enviarOtroTexto() {
    var abc ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var fijo = -1 * parseInt(document.getElementById("desplazamientos").value, 10);
    var abcLongitud = abc.length;
    var palabra = document.getElementById("mensaje").value;
    var largoPalabra = palabra.length;
    var palabraCifrada = "";

    for (var i = 0; i < largoPalabra; i++) {
        var letraPalabra = palabra.charAt(i);

        var posicionEnAbc = abc.indexOf(letraPalabra);


        if (posicionEnAbc != -1) {

            var cantidadAvance = (posicionEnAbc + fijo) % abcLongitud;

            palabraCifrada = palabraCifrada + abc.charAt(cantidadAvance);
        }
        else {
            palabraCifrada = palabraCifrada + letraPalabra;
            // 
        }
    }
    console.log(palabraCifrada);

    document.getElementById("otromensaje").value= palabraCifrada;

}










