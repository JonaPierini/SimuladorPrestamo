// SECCION QUIENES SOMOS - Nosotros
// creo Estructura
let ulNosotros = $("<ul>")
let liNosotros1 = $("<li>")
let liNosotros2 = $("<li>")
let liNosotros3 = $("<li>")

// uno a la estructura del HTML
$("#contenedorNosotros").append(ulNosotros)
$(ulNosotros).append(liNosotros1)
$(liNosotros1).text("Somos una empresa familiar en donde nuestros objetivos son los mismos que los tuyos.")

$(ulNosotros).append(liNosotros2)
$(liNosotros2).text("Nos diferenciamos por nuestro trato personal y humano.")

$(ulNosotros).append(liNosotros3)
$(liNosotros3).text("Te acercamos miles de opciones para que puedas concretar eso que tanto queres. No lo dudes mas, acercate a nuestras oficinas.")
// creo css para darle estilos
$(ulNosotros).css("padding-top", "20px") 
$(ulNosotros).css("text-align", "justify") 
$(ulNosotros).css("height", "350px")



// SECCION QUIENES SOMOS - Historia
// creo Estructura
let ulHistoria = $("<ul>")
let liHistoria1 = $("<li>")
let liHistoria2 = $("<li>")
let liHistoria3 = $("<li>")

// uno a la estructura del HTML
$("#contenedorHistoria").append(ulHistoria)
$(ulHistoria).append(liHistoria1)
$(liHistoria1).text("El 3 de marzo de 2019 FecCredit Compañia Financiera abrio sus puertas en la Ciudad de Rosario.")

$(ulHistoria).append(liHistoria2)
$(liHistoria2).text("FacCredit inició sus actividades como institución financiera no bancaria llegando a un centenar de personas.")

$(ulHistoria).append(liHistoria3)
$(liHistoria3).text("Actualmente contamos con miles de clientes y excelentes propuestas.")
// creo css para darle estilos
$(ulHistoria).css("padding-top", "20px") 
$(ulHistoria).css("text-align", "justify") 
$(ulHistoria).css("height", "350px")


// SECCION QUIENES SOMOS - Nuestor Valores
// creo Estructura
let divValores = $("<div>")
let h3Valores = $("<h3>")
let pValores = $("<p>")
let h3Valores2 = $("<h3>")
let pValores2 = $("<p>")
let h3Valores3 = $("<h3>")
let pValores3 = $("<p>")

// uno la estructura
$("#contenedorValores").append(divValores)
$(divValores).append(h3Valores)
$(divValores).append(pValores)
$(divValores).append(h3Valores2)
$(divValores).append(pValores2)
$(divValores).append(h3Valores3)
$(divValores).append(pValores3)

// creo textos
$(h3Valores).text("Agilidad")
$(pValores).text("Somos resolutivos y flexibles: buscamos soluciones rápidas y eficaces, y nos adaptamos a las necesidades de cada cliente y mercado.")

$(h3Valores2).text("Visión")
$(pValores2).text("Nuestro unico objetivo es que logremos juntos eso que tanto queres.")

$(h3Valores3).text("Proposito")
$(pValores3).text("Además de contribuir al bienestar financiero de nuestros clientes, nuestro propósito es apoyar el progreso de toda la sociedad. Somos una entidad minorista enraizada allá donde trabajamos y, por ello, nos sentimos partícipes del progreso de las comunidades donde desarrollamos nuestro negocio.")

// css
$(divValores).attr("class", "divValores")
$(h3Valores).attr("class", "h3Valores")
$(pValores).attr("class", "pValores")

$(h3Valores2).attr("class", "h3Valores")
$(pValores2).attr("class", "pValores")

$(h3Valores3).attr("class", "h3Valores")
$(pValores3).attr("class", "pValores")

$(pValores3).attr("id", "pValoresContinuar")


// SECCION CALCULAR PRESTAMO
// Crear Estructura
let divNombre = $("<div>")
let inputNombre = $('<input>')
let divEmail = $("<div>")
let inputEmail = $('<input>')
let divMonto = $("<div>")
let inputMonto = $('<input>')
let divPlazo = $("<div>")
let inputPlazo = $('<input>')
let divBotonEnviar = $("<div>")
let botonEnviar = $('<button>')

// Uno a la estructura del HTML
$("#conteinerPrestamo").append(divNombre);
$(divNombre).append(inputNombre);
$("#conteinerPrestamo").append(divEmail)
$(divEmail).append(inputEmail)
$("#conteinerPrestamo").append(divMonto)
$(divMonto).append(inputMonto)
$("#conteinerPrestamo").append(divPlazo)
$(divPlazo).append(inputPlazo)
$("#conteinerPrestamo").append(divBotonEnviar)
$(divBotonEnviar).append(botonEnviar)

// Crar Atributos
//Nombre
$(divNombre).attr("id", "divNombre")
$(inputNombre).attr("id", "inputNombre")
$(inputNombre).attr("type", "text")
$(inputNombre).attr("placeholder", "Ingrese su Nombre")
//Email
$(divEmail).attr("id", "divEmail")
$(inputEmail).attr("type", "email")
$(inputEmail).attr("id", "inputEmail")
$(inputEmail).attr("placeholder", "Ingrese su Email")
// Monto
$(divMonto).attr("id", "divMonto")
$(inputMonto).attr("id", "inputMonto")
$(inputMonto).attr("type", "number")
$(inputMonto).attr("placeholder", "Ingrese monto a calcular")
// Plazo
$(divPlazo).attr("id", "divPlazo")
$(inputPlazo).attr("id", "inputPlazo")
$(inputPlazo).attr("type", "number")
$(inputPlazo).attr("placeholder", "Ingrese plazo a calcular")
// Boton
$(divBotonEnviar).attr("id", "divBotonEnviar")
$(botonEnviar).attr("id", "botonEnviar")
$(botonEnviar).text("Enviar")
$(botonEnviar).css("background-color", "#EA307A")
$(botonEnviar).css("border", "transparent")
$(botonEnviar).css("border-radius", "10px")
$(botonEnviar).css("color", "#F9FDFD")
$(botonEnviar).css("font-weight" ," 500")




