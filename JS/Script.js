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

function encriptar(texto) {
  var textoEncriptado = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto.charAt(i) === "a") {
      textoEncriptado = textoEncriptado + "ai";
    } else if (texto.charAt(i) === "e") {
      textoEncriptado = textoEncriptado + "enter";
    } else if (texto.charAt(i) === "i") {
      textoEncriptado = textoEncriptado + "imes";
    } else if (texto.charAt(i) === "o") {
      textoEncriptado = textoEncriptado + "ober";
    } else if (texto.charAt(i) === "u") {
      textoEncriptado = textoEncriptado + "ufat";
    } else {
      textoEncriptado = textoEncriptado + texto.charAt(i);
    }
  }

  return textoEncriptado;
}

function desencriptar(texto) {
  var textoDesencriptado = "";
  var expA = new RegExp("ai", "g");
  var expE = new RegExp("enter", "g");
  var expI = new RegExp("imes", "g");
  var expO = new RegExp("ober", "g");
  var expU = new RegExp("ufat", "g");

  textoDesencriptado = texto.replace(expA, "a");
  texto = textoDesencriptado;
  textoDesencriptado = texto.replace(expE, "e");
  texto = textoDesencriptado;
  textoDesencriptado = texto.replace(expI, "i");
  texto = textoDesencriptado;
  textoDesencriptado = texto.replace(expO, "o");
  texto = textoDesencriptado;
  textoDesencriptado = texto.replace(expU, "u");
  texto = textoDesencriptado;
  return textoDesencriptado;
}

function minusculaSinAcento(texto) {
  var minuscula = false;
  var caracterinvalido = new RegExp("[áéíóúÁÉÍÓÚ]|[0-9]|[A-Z]", "g");
  var mensaje = texto;

  if (texto == "") {
    alert("Debe ingresar un mensaje");
    return false;
  } else if (!caracterinvalido.test(mensaje)) {
    return true;
  } else {
    alert("Ingrese mensaje sin acentos, números o mayúsculas");
  }

  return minuscula;
}

function limpiar(){
  input.value = "";
}

function copiar(){
  var copyText = document.querySelector("#msg");
  copyText.select();
  document.execCommand("copy");
}