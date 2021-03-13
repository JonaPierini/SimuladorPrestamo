// Funcion Contactanos
function contactanosBoton(){ 
    Swal.fire('FacCredit@gmail.com')
}

// Funciones Nosotros/Historia
$(ulNosotros).hide()
function nosotros (){
    $(ulNosotros).slideToggle(1000);

}

$(ulHistoria).hide()
function historia (){
    $(ulHistoria).slideToggle(1000);

}

// Funcion Valores
function valores(){
    $("#botonValoresContinuar").slideToggle(50)
    $("#contenedorValores").toggle(1000); 
    $("#ocultar").hide()
    
}

// Funcion Continuar leyendo
function continuarLeyendo() {
    $("#ocultar").toggle(1000) 

}




// Funcin Validar Nombre Click
function validarNombre() {
    borrarNombre()
    if($("#inputNombre").val() === "" || !isNaN(parseInt($("#inputNombre").val()))){
        // creo el div
        let nuevoDivNombre = $("<div>")
        // creo el p
        let nuevoPNombre = $("<p>")
        // creo el texto
        let nuevoPTexto = $(nuevoPNombre).text("*Ingrese su nombre en forma correcta")
        // creo attr
        $(nuevoDivNombre).attr("id", "nuevoDivNombre")
        // uno
        $("#divNombre").append(nuevoDivNombre)
        $(nuevoDivNombre).append(nuevoPNombre)
        $(nuevoPNombre).append(nuevoPTexto)
        // estilo
        $(nuevoPNombre).css("color", "red")
       
      
    } else{
        // creo el div
        let nuevoDivNombre = $("<div>")
        // creo el p
        let nuevoPNombre = $("<p>")
        // creo el texto
        let nuevoPTexto = $(nuevoPNombre).text("Hola " + $("#inputNombre").val() + "!")
        // creo attr
        $(nuevoDivNombre).attr("id", "nuevoDivNombre")
        // uno
        $("#divNombre").append(nuevoDivNombre)
        $(nuevoDivNombre).append(nuevoPNombre)
        $(nuevoPNombre).append(nuevoPTexto)
        // estilo
        $(nuevoPNombre).css("color", "blue")
        
    }
  }

// Funcion Validar Nombre Enter
function validarNombreEnter (e) { 
    if(e.originalEvent.keyCode == 13){
        validarNombre()
    }
};

// Funcion Borrar
function borrarNombre() {
  if($("#nuevoDivNombre") !== null){
    $("#nuevoDivNombre").remove()
  }
}





