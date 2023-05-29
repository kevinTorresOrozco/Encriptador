function encriptar() {
  var cadena = document.getElementById("textoEncriptar").value.toLowerCase();

  var texto = cadena.replace(/e/gim, "enter");
  texto = texto.replace(/i/gim, "imes");
  texto = texto.replace(/a/gim, "ai");
  texto = texto.replace(/o/gim, "ober");
  texto = texto.replace(/u/gim, "ufat");
  document.getElementById("textoDesencriptar").innerHTML = texto;
  document.getElementById("btnCopiar").style.display = "show";
  document.getElementById("btnCopiar").style.display = "inline";
}

function desencriptar() {
  var cadena = document.getElementById("textoEncriptar").value.toLowerCase();

  var texto = cadena.replace(/enter/gim, "e");
  texto = texto.replace(/imes/gim, "i");
  texto = texto.replace(/ai/gim, "a");
  texto = texto.replace(/ober/gim, "o");
  texto = texto.replace(/ufat/gim, "u");
  document.getElementById("textoDesencriptar").innerHTML = texto;
}

function copiar() {
  var contenido = document.querySelector("#textoDesencriptar");
  contenido.select();
  document.execCommand("copy");
}
