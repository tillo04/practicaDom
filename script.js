let personas = [];
function capturaDatos() {
  console.log("Capturando datos...");
  let persona = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
    fecha: document.getElementById("fecha").value,
    ciudad: document.getElementById("ciudad").value,
  };
  personas.push(persona);
  mostrarCards();
}
function mostrarCards() {
  document.getElementById("cards").innerHTML = "";
  personas.map(function (persona) {
    let card = document.createElement("section");
    let nombre = document.createElement("p");
    let correo = document.createElement("p");
    let telefono = document.createElement("p");
    let fecha = document.createElement("p");
    let ciudad = document.createElement("p");
    nombre.textContent = persona.nombre;
    correo.textContent = persona.correo;
    telefono.textContent = persona.telefono;
    fecha.textContent = persona.fecha;
    ciudad.textContent = persona.ciudad;
    card.append(nombre, correo, telefono, fecha, ciudad);
    document.getElementById("cards").append(card);
  });
}
let inputs = document.querySelectorAll("#formulario input");
// console.log(inputs)
inputs.forEach(function (input) {
  // console.log(input)
  // input.addEventListener("click", validarFormulario);
  // input.addEventListener("blur", validarFormulario);
  input.addEventListener("keyup", validarFormulario);
});

let expresionesRegulares = {
  nombre: /^[a-zA-Z]+$/,
  correo: /\b([\w\.-]+)@([\w\-]+)(\.\w{2,4})(\.\w{2,4})?\b/g
};

function validarFormulario(e) {
  switch (e.target.name) {
    case "nombre":
        if(expresionesRegulares.nombre.test(e.target.value)){
          document.getElementById("mensajeNombre").textContent=""
          document.getElementById("mensajeNombre").classList.remove("campoIncorrecto")
        } else {
          document.getElementById("mensajeNombre").textContent="campo invalido"
          document.getElementById("mensajeNombre").classList.add("campoIncorrecto")
        }
      break;
      case "email":
        if (expresionesRegulares.correo.test(e.target.value)) {
          console.log("paso la validacion")
        }else{
          console.log("no paso la validacion")
        }
        break;
    }
}

