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
  