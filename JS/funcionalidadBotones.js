var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copy");
var input = document.querySelector("#input-texto");
input.focus();

btnEncriptar.addEventListener("click", function (evento) {
  evento.preventDefault();
  
  var mensaje = input.value;

  if (minusculaSinAcento(mensaje)) {
    var mensajeEncriptado = encriptar(mensaje);
    var output = document.querySelector("#msg");
    output.value = mensajeEncriptado;
  }
  limpiar()
  input.focus();
});

btnDesencriptar.addEventListener("click", function (evento) {
  evento.preventDefault();

  var mensaje = input.value;

  if (minusculaSinAcento(mensaje)) {
    var mensajeDesencriptado = desencriptar(mensaje);
    var output = document.querySelector("#msg");
    output.value = mensajeDesencriptado;
  }
  limpiar();
  input.focus();
});

btnCopiar.addEventListener("click", function (evento) {
  evento.preventDefault();

  copiar();

});

function limpiar(){
  input.value = "";
}

function copiar(){
  var copyText = document.querySelector("#msg");
  copyText.select();
  document.execCommand("copy");
}