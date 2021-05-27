const cipher = {
  encode: (fijo, palabra) => encode(fijo, palabra),
  decode: (fijo, palabra) => decode(fijo, palabra)
};

export default cipher;
 

 function encode(fijo, palabra) {
  var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var abcLongitud = abc.length;
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
  
  return palabraCifrada;
 }


function decode(fijo, palabra) {
  var abc = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  var abcLongitud = abc.length;
  palabra = palabra.toUpperCase()
  var largoPalabra = palabra.length;
  var palabraDescifrada = "";

  for (var i = 0; i < largoPalabra; i++) {
    var letraPalabra = palabra.charAt(i);
    var posicionEnAbc = abc.indexOf(letraPalabra);

    if (posicionEnAbc != -1) {
      var cantidadAvance = (posicionEnAbc + fijo) % abcLongitud;
      palabraDescifrada = palabraDescifrada + abc.charAt(cantidadAvance);
    }
    else {
      palabraDescifrada = palabraDescifrada + letraPalabra;
    }
  }

  return palabraDescifrada;  
}

