//alert("Hola este es mi Javascript");

// let nombre = "Fabian";
// nombre = "Dora";

// var nombre1 = "Fabian"

// const nombre2 = "Fabian";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);



// SELECTORES POR ID, CLASS Y TAG 

// const elementById = document.getElementById("Sección-Principal")
// console.log("getElementById()",elementById)

// const elementsByClassName = document.getElementsByClassName("card")
// console.log("getElementsByClassName()", elementsByClassName)

// const elementsByTagName = document.getElementsByTagName("ul")
// console.log("getElementsByTagName()", elementsByTagName)



// QUERY SELECTOR

// const elementByQuerySelector = document.querySelector(".li_links")
// console.log("querySelector()", elementByQuerySelector)

// const elementsByQuerySelector = document.querySelectorAll(".li_links")
// console.log("querySelectorAll()", elementsByQuerySelector)
// console.log("[0]: ", elementsByQuerySelector[0])
// console.log("item(0): ", elementsByQuerySelector.item(0))
// console.log("keys(): ", elementsByQuerySelector.keys())

// for (let i = 0; i < elementsByQuerySelector.keys().length; i++) {
//     console.log(elementsByTagName.keys()[i])
// }
// for (const k of elementsByQuerySelector.keys()) {
//     console.log(k)
// }
// console.log("values(): ", elementsByQuerySelector.values())
// for (const v of elementsByQuerySelector.values()) {
//     console.log(v)
// }
// console.log("entries(): ", elementsByQuerySelector.entries())
// for (const e of elementsByQuerySelector.entries()) {
//     console.log(e[0], e[1])
// }

// ********
// elementsByQuerySelector.forEach(pepe => 
// console.log("soy un nodo de elementsByQuerySelector y estas son mis clases: "+pepe.className))
// const elementosP = elementById.querySelectorAll("p")
// console.log("elementosP: ",elementosP)



// PROPIEDADES

// console.log("Propiedades ")
// const elementById = document.getElementById("Sección-Principal")
// /* id: Obtiene o establece el atributo "id" de un elemento. */
// elementById.id = "ahoraTengoOtroId"; console.log("elementById.id: ", elementById.id)
// /* tagName: Devuelve el nombre de la etiqueta HTML de un elemento en mayúsculas. */
// elementById.tagName = "BODY" ; console.log("elementById.tagName: ", elementById.tagName)
// /* title: proporciona información adicional sobre el elemento en forma de una descripción emergente (tooltip). */
// elementById.title = "soy un elemento contenedor" ; console.log("elementById.title: ", elementById.title)
// /* hidden: propiedad que permite ocultar o desocultar un elemento */
// //  elementById.hidden = true ; console.log("elementById.hidden: ", elementById.hidden)
// /* hasAttribute(): Verifica si un elemento tiene un atributo específico. */
// console.log("elementById.hasAttribute('title'): ", elementById.hasAttribute('title'))
// /* getAttribute(): Obtiene el valor de un atributo de un elemento. */
// console.log("elementById.getAttribute('atributo-inventado'): ", elementById.getAttribute('atributo-inventado'))
// /* setAttribute(): Establece o modifica el valor de un atributo de un elemento. */
// console.log("elementById.setAttribute('name','el-div'): ", elementById.setAttribute('name','el-div'))
// /* removeAttribute(): Elimina un atributo de un elemento. */
// elementById.removeAttribute('title')



// CONTENIDO DE ELEMENTO

// console.log("Contenido de un elemento ")
// /* innerHTML: Obtiene o establece el contenido HTML de un elemento.
// /* innerText: Obtiene o establece el contenido de texto de un elemento y sus descendientes, teniendo en cuenta el estilo CSS y el formato.*/
// /* textContent: Obtiene o establece el contenido de texto de un elemento y sus descendientes, sin tener en cuenta el estilo CSS ni el formato. */
// /* outerText: Obtiene o establece el contenido completo de texto de un elemento y sus descendientes, teniendo en cuenta el estilo CSS y el formato. */
// /* outerHTML: Obtiene o establece el código HTML completo de un elemento, incluidas sus etiquetas HTML de apertura y cierre.  */
// const contenido = document.getElementById('Sección-Principal');
// console.log('textContent:\n', contenido.textContent);
// console.log('innerText:\n', contenido.innerText);
// console.log('innerHTML:\n', contenido.innerHTML);
// console.log('outerText:\n', contenido.outerText);
// console.log('outerHTML:\n', contenido.outerHTML);


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `*El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});


