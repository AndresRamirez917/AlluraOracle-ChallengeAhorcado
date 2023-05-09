// IMPORTACIÓN DEL JSON CON LAS PALABRAS QUE SE GENERARAN ALEATORIAMENTE
import myJson from "./palabrasComunes.json" assert { type: "json" };
// import  * as funciones from "/canvas.js";
console.log(myJson);

// FUNCIÓN QUE GENERA LA PALABRA ALEATORIA DEL JSON
function getRandomWord() {
  const randomNum = Math.floor(Math.random() * myJson.length) + 0;
  return myJson[randomNum];
}
console.log(getRandomWord());

// CÓDIGO PARA CONVERTIR LAS LETRAS EN GUIONES, PENDIENTE POR ANALIZAR
String.prototype.replaceAt = function (index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

// DECLARO LA NO VISIBILIDAD DE ESTOS CONTROLES AL INICIAR
controlesNoVisibles();

// DECLARARACIÓN VARIABLES
let palabrasArray = [];
let letraRepetidaArray = [];
let palabraGuiones;
let intentos = 0;
let palabraAleatoria;
// EVITO QUE LOS GIFS SE MUESTREN AL INICIO DEL PROGRAMA
document.querySelector(".confeti").style.visibility = "hidden";
document.querySelector(".homero").style.visibility = "hidden";
document.querySelector(".muerte").style.display = "none";
document.querySelector(".muerte2").style.display = "none";
document.querySelector(".num-intentos").style.display = "none";
document.querySelector("#boton-compara").style.visibility = "hidden";
document.querySelector("#letra-input").style.visibility = "hidden";
document.querySelector("#label-palabra").style.visibility = "hidden";
// document.querySelector("#agregar-palabra").style.visibility="visible"
// document.querySelector(".container").style.visibility="visible"

// GENERO LA PALABRA CON EL BOTÓN
let botonAgregarPalabra = document.querySelector("#agregar-palabra");
botonAgregarPalabra.addEventListener("click", function () {
  palabrasArray = [];
  palabraAleatoria = getRandomWord();

  // INGRESO LA PALABRA GENERADA ALEATORIAMENTE AL ARRAY
  palabrasArray.push(palabraAleatoria);

  console.log(palabrasArray);
  //palabrasArray.shift()
  // console.log(nue);

  // CONTROLES QUE SE MUESTRAN AL HACER CLICK EN EL BOTÓN QUE GENERA LA PALABRA ALEATORIA = INPUT PARA LAS LETRAS,
  // BOTÓN COMPROBAR LETRA, CANVAS CON EL GRÁFICO DE LA HORCA, ETIQUETAS QUE MUESTRAN INFORMACIÓN DEL JUEGO Y EL GIF MUERTE
  document.querySelector("#agregar-palabra").style.display = "none";
  document.querySelector("#iniciar-juego").disabled = "true";
  palabraGuiones = palabraAleatoria.replace(/./g, "_ ");
  document.querySelector("#iniciar-juego").style.display = "grid";
  document.querySelector(".num-intentos").style.display = "grid";
  mostrarMenu();
  horca();
  document.getElementById("letra-input").focus();
  document.querySelector("#jugar").style.display = "none";
});

// BOTÓN QUE COMPARA LAS LETRAS CON LA PALABRA GENERADA ALEATORIAMENTE
let botonCompara = document.querySelector("#boton-compara");
botonCompara.addEventListener("click", function () {
  /**
   *  IGUALO LA VARIABLE AL VALOR DEL INPUT, REMPLAZO POR GUIONES
   *  Y COMPARO SEGÚN RELGAS EN EL CÓDIGO HTML
   */
  document.querySelector(".muerte").style.display = "grid";
  let letraInput = document.querySelector("#letra-input").value.toLowerCase();
  // VALIDO EL INPUT DE LAS LETRAS INGRESADAS PARA MAYÚSCULAS, NÚMEROS Y ACENTOS
  if (letraInput == "" || /^\d*\.?\d*$/.test(letraInput)) {
    alert("Debe De Ingresar Una Letra Para Comparar");
  } else {
    // REMPLAZO LA PALABRA POR GUIONES
    for (let i in palabraAleatoria) {
      if (letraInput == palabraAleatoria[i]) {
        palabraGuiones = palabraGuiones.replaceAt(i * 2, letraInput);
      }
    }
    // VERIFICACIÓN DE INTENTOS
    if (!palabraAleatoria.includes(letraInput)) {
      intentos++;
    }
    // VERIFICACIÓN LETRAS REPETIDAS A TRAVÉS DE UN MODAL
    if (letraRepetidaArray.includes(letraInput)) {
      alert(`la letra "${letraInput}" ya fue elegida`);
      intentos--;
    }
    // SI LA LETRA HACE PARTE O NO DE LA PALABRA SE INGRESA AL ARRAY DE LETRAS REPETIDAS
    else if (
      !palabraAleatoria.includes(letraInput) ||
      palabraAleatoria.includes(letraInput)
    ) {
      letraRepetidaArray.push(letraInput);
      console.log(letraRepetidaArray);
    }

    // COMPARACIÓN NÚMERO DE INTENTOS CON LOS LLAMADOS A FUNCIONES QUE DIBUJAN LAS PARTES DEL AHORCADO
    if (intentos == 1) {
      console.log(circulo());
    } else if (intentos == 2) {
      console.log(tronco());
    } else if (intentos == 3) {
      console.log(brazoDer());
    } else if (intentos == 4) {
      console.log(brazoIzq());
    } else if (intentos == 5) {
      document.querySelector(".muerte").style.display = "none";

      console.log(piernaDer());
      document.querySelector(".muerte2").style.display = "grid";
    } else if (intentos == 6) {
      console.log(piernaIzq());
    }
    if (intentos >= 6) {
      // MUESTRO Y OCULTO CONTROLES SEGÚN EL NÚMERO DE INTENTOS

      esconderMenuDerrota();
      document.querySelector(".palabra-Secreta").innerHTML =
        "La palabra secreta era " + palabrasArray;
    } else {
      if (palabraGuiones.indexOf("_") < 0) {
        esconderMenuVictoria();
      }
    }
  }

  // MUESTRO EN ETIQUETAS LA PALABRA SECRETA, LOS INTENTOS Y LAS LETRAS INGRESADAS
  document.querySelector("#output").innerHTML = palabraGuiones;
  document.querySelector("#intentos").innerHTML = intentos;
  document.getElementById("letra-input").value = "";
  document.getElementById("letra-input").focus();
  document.querySelector(".palabra-Secreta").innerHTML =
    "La palabra secreta era " + palabrasArray;
  document.querySelector(".palabra-Secreta2").innerHTML =
    "La palabra secreta era " + palabrasArray;
  document.querySelector(".numero-Intentos").innerHTML =
    "El número de fallos fue " + intentos;
  document.querySelector(".numero-Intentos2").innerHTML =
    "El número de fallos fue " + intentos;
  document.querySelector(".letras-Digitadas").innerHTML =
    "Usted digitó las letras " + letraRepetidaArray;
  document.querySelector(".total-Letras").innerHTML =
    "Total letras " + letraRepetidaArray;
});

/**
 *  REINICIO EL JUEGO USANDO onclick="window.location.reload()"
 *  QUE SE ENCUENTRA EN EL CÓDIGO HTML EN EL BOTÓN NUEVO-JUEGO
 */
/*boton ganar */
let botonNuevoJuego = document.querySelector("#nuevo-juego");
botonNuevoJuego.addEventListener("click", function () {
  llamarHorca();
  horca();
  //willow()
  //clearCanvas()
});

/**boton perder */
let botonNuevoJuego1 = document.querySelector("#nuevo-juego1");
botonNuevoJuego1.addEventListener("click", function () {
  llamarHorca();
  clearCanvas();
  horca();
  //willow()
  //clearCanvas()
});

function llamarHorca() {
  palabrasArray = [];
  letraRepetidaArray = [];
  intentos = 0;
  palabraAleatoria = getRandomWord();
  palabrasArray.push(palabraAleatoria);
  document.querySelector("#intentos").innerHTML = "";
  document.querySelector("#output").innerHTML = "";
  document.querySelector(".total-Letras").innerHTML = "";
  document.querySelector("#agregar-palabra").style.visibility = "hidden";
  document.querySelector("#iniciar-juego").disabled = "true";
  document.getElementById("canvas").style.display = "grid";
  document.querySelector("#label").innerHTML = intentos;
  // document.querySelector("#label").innerHTML =
  // "El número de fallos fue " + intentos;
  //mostrarMenuReinicio()-------------------------------------------------
  palabraGuiones = palabraAleatoria.replace(/./g, "_ ");
  document.querySelector("#iniciar-juego").style.display = "grid";
  mostrarMenu();
  //horca()
  document.getElementById("letra-input").focus();
  document.querySelector("#jugar").style.display = "none";
  reiniciarJuego();
}

// function willow(){
//   return horca()=true
// }

const reiniciar = () => {
  return palabrasArray.shift();
};
