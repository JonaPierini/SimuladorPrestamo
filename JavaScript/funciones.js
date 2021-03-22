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
        let nuevoPTextoMonto = $(nuevoPMonto).text("Monto ingresado: $" + $("#inputMonto").val())
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
        let nuevoPTextoPlazo = $(nuevoPPlazo).text("Plazo ingresado: " + $("#inputPlazo").val() + " meses")
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


// funcion Calculadora
function  calculadora () {
    borrarCalculadora()
    borrarBotonObteneTuPrestamo()
    if(validarNombre() === true && validarEmail() === true && validarPlazo()=== true && validarMonto() === true){
        let nuevoDivCalculadora = $("<div>")
        let nuevoUlCalculadora = $("<ul>")
        let nuevoLiCalculadora = $("<li>")
        let nuevoLiCalculadora2 = $("<li>")
        let nuevoLiCalculadora3 = $("<li>")
        $(nuevoDivCalculadora).attr("id", "nuevoDivCalculadora")
        $(nuevoUlCalculadora).attr("id", "nuevoUlCalculadora")
        $("#conteinerPrestamo").append(nuevoDivCalculadora)
        $(nuevoDivCalculadora).append(nuevoUlCalculadora)
        $(nuevoUlCalculadora).append(nuevoLiCalculadora)
        $(nuevoUlCalculadora).append(nuevoLiCalculadora2)
        $(nuevoUlCalculadora).append(nuevoLiCalculadora3)
        // cuentas
        let pagoPorMes = Math.trunc(($("#inputMonto").val() * 0.3))
        let plazoPorMes = Math.trunc(($("#inputPlazo").val()))
        nuevoLiCalculadora.text("Pago por mes $" + pagoPorMes)
        nuevoLiCalculadora2.text("Plazo " + plazoPorMes + " meses")
        nuevoLiCalculadora3.text("Total a pagar $" + (pagoPorMes * plazoPorMes))

        let nuevoDivCalculadoraBoton = $("<div>")
        let nuevoBotonCalculadora = $("<button>")
        $(nuevoDivCalculadoraBoton).attr("id", "nuevoDivCalculadoraBoton")
        $("#conteinerPrestamo").append(nuevoDivCalculadoraBoton)
        $(nuevoDivCalculadoraBoton).append(nuevoBotonCalculadora)
        // Boton
        $(nuevoBotonCalculadora).attr("id", "nuevoBotonCalculadora")
        $(nuevoBotonCalculadora).text("Obtene tu prestamo YA")

        $("#nuevoBotonCalculadora").click(nosComunicamosYa)
    }
}


// funcion borrar calculadora
function borrarCalculadora() {
    if($("#nuevoDivCalculadora") !== null){
        $("#nuevoDivCalculadora").remove()
      }
}


// funcion Borrar boton obten tu prestamo
function borrarBotonObteneTuPrestamo() {
    if($("#nuevoDivCalculadoraBoton") !== null){
        $("#nuevoDivCalculadoraBoton").remove()
      }
}

// funcion nos comunicamos YA
function  nosComunicamosYa () {
    Swal.fire({
        title: "En instantes nos comunicamos con VOS!",
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}




// Funcion Almacenar Datos

function almacenarDatos (){
    if(validarNombre () == true && validarEmail() == true && validarMonto() == true && validarPlazo() == true){
        function Usuario (nombre, email, monto, plazo){
            this.nombre = nombre,
            this.email = email,
            this.monto = monto,
            this.plazo = plazo
        }
        let usuario1 = new Usuario ($("#inputNombre").val(), $("#inputEmail").val(), $("#inputMonto").val(), $("#inputPlazo").val())
        // seccion local
        arrayVacio = []
        if(localStorage.getItem("datos") !== null){
            arrayVacio = JSON.parse(localStorage.getItem("datos"))
        }
        arrayVacio.push(usuario1)
        let transformarACadena = JSON.stringify(arrayVacio)
        localStorage.setItem("datos", transformarACadena)

    
    }   

}

// Funcion recuperar Datos

function recuperarDatos (){
    
    if(localStorage.getItem("datos") !== null){
        $("#ultimosCalculosBoton").click(prueba)
    let transformarObjeto = JSON.parse(localStorage.getItem("datos"))  
    for(let i = 0; i < transformarObjeto.length; i++){
        
        borrarRecuperarDatos()
        let recuperarDatosDiv = $("<div>")
        let recuperarDatosP = $("<p>")
        recuperarDatosDiv.attr("id", "recuperarDatosId")
        let recuperarDatosText = recuperarDatosP.text("Nombre: " + transformarObjeto[i].nombre + " - " + "Plazo: " + transformarObjeto[i].plazo + " meses" +  " - " + "Monto: $" + transformarObjeto[i].monto)
        $(recuperarDatosP).css("margin-top", "10px")
        $(recuperarDatosP).css("text-align", "center")
        $("#ultimosCalculos").append(recuperarDatosDiv)
        recuperarDatosDiv.append(recuperarDatosP)
        recuperarDatosP.append(recuperarDatosText)  
        
    } 
}   else{
        $("#ultimosCalculosBoton").click(prueba)
        borrarRecuperarDatos()
        let recuperarDatosDiv = $("<div>")
        let recuperarDatosP = $("<p>")
        recuperarDatosDiv.attr("id", "recuperarDatosId")
        let recuperarDatosText = recuperarDatosP.text("No hay solicitudes cargadas")
        $(recuperarDatosP).css("margin-top", "10px")
        $("#ultimosCalculos").append(recuperarDatosDiv)
        recuperarDatosDiv.append(recuperarDatosP)
        recuperarDatosP.append(recuperarDatosText)  
}
}

// LLamado a funcion almacenar Datos
$("#botonEnviar").click(almacenarDatos)
$("#ultimosCalculosBoton").click(recuperarDatos)



// Funcion BorrarDatos

function borrarRecuperarDatos() {
    if($("#recuperarDatosId") !== null){
      $("#recuperarDatosId").remove()
    }
  }



function prueba() {
    $("#recuperarDatosId").toggle()
  }







// SECCION AJAX / API

function cotizacion(){

$.ajax({
    type: "get",
    url: "https://www.dolarsi.com/api/api.php?type=valoresprincipales",
    dataType: "JSON"
    
}). done(function(resultado){
    Swal.fire({
        title: "Compra / Venta: " + "$" + resultado[0].casa.compra + " / " + "$" + resultado[0].casa.venta,
        icon: 'info',
        html:
          'Para mas info ' +
          '<a href="https://www.dolarsi.com/">click aqui!</a> ',
      })
}). fail(function(xhr, status, error){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Algo salio mal. Intente mas tarde"
      })
})

}


// Boton unClick


function botonEscribinos (){
    $("#botonClickFormulario").toggle(500);
}


function botonEnviarConsulta () {
    if($("#inputClick").val() === "" || $("#textareaClick").val() === "" ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No has completado el formulario correctamente',
          })
    } else{
        Swal.fire({
            icon: 'success',
            title: 'GRACIAS! En breve nos comunicaremos con vos!',
            showConfirmButton: false,
            timer: 1500
          }) 
         borrarFormularioEnviar()
    }
}


function borrarFormularioEnviar() { 
    $("#botonClickFormulario").hide()
}

