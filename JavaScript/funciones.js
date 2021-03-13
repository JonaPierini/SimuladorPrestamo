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
    if($("#inputNombre").val() === "" || !isNaN(parseInt($("#inputNombre").val())) || $("#inputNombre").val().length < 3){
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
        let nuevoPTextoNombre = $(nuevoPNombre).text("Hola " + $("#inputNombre").val() + "!")
        // creo attr
        $(nuevoDivNombre).attr("id", "nuevoDivNombre")
        // uno
        $("#divNombre").append(nuevoDivNombre)
        $(nuevoDivNombre).append(nuevoPNombre)
        $(nuevoPNombre).append(nuevoPTextoNombre)
        // estilo
        $(nuevoPNombre).css("color", "#3c7dbd")
        $(nuevoPNombre).css("font-weight", "500")
        return true
        
    }
  }

// Funcion Validar Nombre Enter
function validarNombreEnter (e) { 
    if(e.originalEvent.keyCode == 13){
        validarNombre()
    }
};

// Funcion Borrar Nombre
function borrarNombre() {
  if($("#nuevoDivNombre") !== null){
    $("#nuevoDivNombre").remove()
  }
}


// Funcin Validar Email Click
function validarEmail() {
    borrarEmail()
    if($("#inputEmail").val() === "" || !isNaN(parseInt($("#inputEmail").val())) || $("#inputEmail").val().length < 5) {
        // creo el div
        let nuevoDivEmail = $("<div>")
        // creo el p
        let nuevoPEmail = $("<p>")
        // creo el texto
        let nuevoPTextoEmail = $(nuevoPEmail).text("*Ingrese su email en forma correcta")
        // creo attr
        $(nuevoDivEmail).attr("id", "nuevoDivEmail")
        // uno
        $("#divEmail").append(nuevoDivEmail)
        $(nuevoDivEmail).append(nuevoPEmail)
        $(nuevoPEmail).append(nuevoPTextoEmail)
        // estilo
        $(nuevoPEmail).css("color", "red")
           
    }
       
    else{
        // creo el div
        let nuevoDivEmail = $("<div>")
        // creo el p
        let nuevoPEmail = $("<p>")
        // creo el texto
        let nuevoPTextoEmail = $(nuevoPEmail).text("Correo ingresado: " + $("#inputEmail").val())
        // creo attr
        $(nuevoDivEmail).attr("id", "nuevoDivEmail")
        // uno
        $("#divEmail").append(nuevoDivEmail)
        $(nuevoDivEmail).append(nuevoPEmail)
        $(nuevoPEmail).append(nuevoPTextoEmail)
        // estilo
        $(nuevoPEmail).css("color", "#3c7dbd")
        $(nuevoPEmail).css("font-weight", "500")
        return true
        
    }
  }

// Funcion Validar Email Enter
function validarEmailEnter (e) { 
    if(e.originalEvent.keyCode == 13){
        validarEmail()
    }
};

// Funcion Borrar Email
function borrarEmail() {
  if($("#nuevoDivEmail") !== null){
    $("#nuevoDivEmail").remove()
  }
}



// Funcin Validar Monto Click
function validarMonto() {
    borrarMonto()
    if($("#inputMonto").val() === ""){
        // creo el div
        let nuevoDivMonto = $("<div>")
        // creo el p
        let nuevoPMonto = $("<p>")
        // creo el texto
        let nuevoPTextoMonto = $(nuevoPMonto).text("*Ingrese monto en forma correcta")
        // creo attr
        $(nuevoDivMonto).attr("id", "nuevoDivMonto")
        // uno
        $("#divMonto").append(nuevoDivMonto)
        $(nuevoDivMonto).append(nuevoPMonto)
        $(nuevoPMonto).append(nuevoPTextoMonto)
        // estilo
        $(nuevoPMonto).css("color", "red")
       
      
    } else if($("#inputMonto").val() < 1000){
        // creo el div
        let nuevoDivMonto = $("<div>")
        // creo el p
        let nuevoPMonto = $("<p>")
        // creo el texto
        let nuevoPTextoMonto = $(nuevoPMonto).text("*Monto minimo a otorgar $1.000")
        // creo attr
        $(nuevoDivMonto).attr("id", "nuevoDivMonto")
        // uno
        $("#divMonto").append(nuevoDivMonto)
        $(nuevoDivMonto).append(nuevoPMonto)
        $(nuevoPMonto).append(nuevoPTextoMonto)
        // estilo
        $(nuevoPMonto).css("color", "red")
       
      
    } else if($("#inputMonto").val() > 500000){
        // creo el div
        let nuevoDivMonto = $("<div>")
        // creo el p
        let nuevoPMonto = $("<p>")
        // creo el texto
        let nuevoPTextoMonto = $(nuevoPMonto).text("*Monto máximo a otorgar $500.000")
        // creo attr
        $(nuevoDivMonto).attr("id", "nuevoDivMonto")
        // uno
        $("#divMonto").append(nuevoDivMonto)
        $(nuevoDivMonto).append(nuevoPMonto)
        $(nuevoPMonto).append(nuevoPTextoMonto)
        // estilo
        $(nuevoPMonto).css("color", "red")
       
      
    } else{
        // creo el div
        let nuevoDivMonto = $("<div>")
        // creo el p
        let nuevoPMonto = $("<p>")
        // creo el texto
        let nuevoPTextoMonto = $(nuevoPMonto).text("Monto ingresado $" + $("#inputMonto").val())
        // creo attr
        $(nuevoDivMonto).attr("id", "nuevoDivMonto")
        // uno
        $("#divMonto").append(nuevoDivMonto)
        $(nuevoDivMonto).append(nuevoPMonto)
        $(nuevoPMonto).append(nuevoPTextoMonto)
        // estilo
        $(nuevoPMonto).css("color", "#3c7dbd")
        $(nuevoPMonto).css("font-weight", "500")
        return true
        
    }
  }

// Funcion Validar Monto Enter
function validarMontoEnter (e) { 
    if(e.originalEvent.keyCode == 13){
        validarMonto()
    }
};

// Funcion Borrar Monto
function borrarMonto() {
  if($("#nuevoDivMonto") !== null){
    $("#nuevoDivMonto").remove()
  }
}


// Funcin Validar Plazo Click
function validarPlazo() {
    borrarPlazo()
    if($("#inputPlazo").val() === ""){
        // creo el div
        let nuevoDivPlazo = $("<div>")
        // creo el p
        let nuevoPPlazo = $("<p>")
        // creo el texto
        let nuevoPTextoPlazo = $(nuevoPPlazo).text("*Ingrese plazo en forma correcta")
        // creo attr
        $(nuevoDivPlazo).attr("id", "nuevoDivPlazo")
        // uno
        $("#divPlazo").append(nuevoDivPlazo)
        $(nuevoDivPlazo).append(nuevoPPlazo)
        $(nuevoPPlazo).append(nuevoPTextoPlazo)
        // estilo
        $(nuevoPPlazo).css("color", "red")
       
      
    } else if($("#inputPlazo").val() < 6){
        // creo el div
        let nuevoDivPlazo = $("<div>")
        // creo el p
        let nuevoPPlazo = $("<p>")
        // creo el texto
        let nuevoPTextoPlazo = $(nuevoPPlazo).text("*Plazo minimo a devolver 6 meses")
        // creo attr
        $(nuevoDivPlazo).attr("id", "nuevoDivPlazo")
        // uno
        $("#divPlazo").append(nuevoDivPlazo)
        $(nuevoDivPlazo).append(nuevoPPlazo)
        $(nuevoPPlazo).append(nuevoPTextoPlazo)
        // estilo
        $(nuevoPPlazo).css("color", "red")
       
      
    } else if($("#inputPlazo").val() > 48){
        // creo el div
        let nuevoDivPlazo = $("<div>")
        // creo el p
        let nuevoPPlazo = $("<p>")
        // creo el texto
        let nuevoPTextoPlazo = $(nuevoPPlazo).text("*Plazo máximo a devolver 48 meses")
        // creo attr
        $(nuevoDivPlazo).attr("id", "nuevoDivPlazo")
        // uno
        $("#divPlazo").append(nuevoDivPlazo)
        $(nuevoDivPlazo).append(nuevoPPlazo)
        $(nuevoPPlazo).append(nuevoPTextoPlazo)
        // estilo
        $(nuevoPPlazo).css("color", "red")
       
      
    } else{
        // creo el div
        let nuevoDivPlazo = $("<div>")
        // creo el p
        let nuevoPPlazo = $("<p>")
        // creo el texto
        let nuevoPTextoPlazo = $(nuevoPPlazo).text("Plazo ingresado " + $("#inputPlazo").val() + " meses")
        // creo attr
        $(nuevoDivPlazo).attr("id", "nuevoDivPlazo")
        // uno
        $("#divPlazo").append(nuevoDivPlazo)
        $(nuevoDivPlazo).append(nuevoPPlazo)
        $(nuevoPPlazo).append(nuevoPTextoPlazo)
        // estilo
        $(nuevoPPlazo).css("color", "#3c7dbd")
        $(nuevoPPlazo).css("font-weight", "500")
        return true
        
    }
  }

// Funcion Validar Plazo Enter
function validarPlazoEnter (e) { 
    if(e.originalEvent.keyCode == 13){
        validarPlazo()
    }
};

// Funcion Borrar
function borrarPlazo() {
  if($("#nuevoDivPlazo") !== null){
    $("#nuevoDivPlazo").remove()
  }
}