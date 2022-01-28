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