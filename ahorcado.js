// IMPORTACIÓN DEL JSON CON LAS PALABRAS QUE SE GENERARAN ALEATORIAMENTE
import myJson from './palabrasComunes.json' assert {type: 'json'}
console.log(myJson)

// FUNCIÓN QUE GENERA LA PALABRA ALEATORIA DENTRO DEL JSON
function getRandomWord() {
    const randomNum = Math.floor(Math.random() * (myJson.length - 1)) + 0;
    return myJson[randomNum];
  }
console.log(getRandomWord());

// CÓDIGO PARA CONVERTIR LAS LETRAS EN GUIONES, PENDIENTE POR ANALIZAR
String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}

// DECLARO LA NO VISIBILIDAD DE ESTOS CONTROLES AL INICIAR
controlesNoVisibles();

// DECLARARACIÓN VARIABLES
let palabrasArray = [];
let letraRepetidaArray = [];
let palabraGuiones;
let intentos = 0;
let cadenaSinEspacios;

// AGREGO LA PALABRA
let botonAgregarPalabra = document.querySelector("#agregar-palabra");
botonAgregarPalabra.addEventListener("click", function () {
cadenaSinEspacios = getRandomWord()
   
// INGRESO LA PALABRA GENERADA ALEATORIAMENTE AL ARRAY 
        palabrasArray.push(cadenaSinEspacios);
        console.log(palabrasArray)

// CONTROLES QUE SE MUESTRAN AL INGRESAR UNA PALABRA VÁLIDA AL INPUT
        document.querySelector("#agregar-palabra").disabled = "true"
        document.querySelector("#iniciar-juego").disabled = "true"
        palabraGuiones = cadenaSinEspacios.replace(/./g, "_ ");
        document.querySelector("#iniciar-juego").style.display = "flex"
        mostrarMenu();
        horca();
        document.getElementById("letra-input").focus();
        document.querySelector("#jugar").style.display = "none";
    }  
)

// MUESTRO LOS CONTROLES DONDE SE INGRESAN LAS LETRAS PARA COMPARAR CON LA CADENA INGRESADA
let botonCompara = document.querySelector("#boton-compara")
botonCompara.addEventListener("click", function () {
/**
*  IGUALO LA VARIABLE AL VALOR DEL INPUT, REMPLAZO POR GUIONES
*  Y COMPARO SEGÚN RELGAS EN EL CÓDIGO HTML
*/
    let letraInput = document.querySelector("#letra-input").value
// VALIDO EL INPUT DE LAS LETRAS INGRESADAS PARA MAYÚSCULAS, NÚMEROS Y ACENTOS
    if (letraInput == "" || /^[a-z]\s+$/.test(letraInput)) {
        alert("Debe De Ingresar Una Letra Para Comparar")
    } else {
// REMPLAZO LA PALABRA POR GUIONES
        for (let i in cadenaSinEspacios) {
            if (letraInput == cadenaSinEspacios[i]) {
                palabraGuiones = palabraGuiones.replaceAt(i * 2, letraInput);
            }
        }
// VERIFICACIÓN DE INTENTOS
        if (!cadenaSinEspacios.includes(letraInput)) {
            intentos++;    
    }
// VERIFICACIÓN LETRAS REPETIDAS
    if(letraRepetidaArray.includes(letraInput)){
        alert(`la letra "${letraInput}" ya fue elegida`)
        intentos--
    }
// SI LA LETRA HACE PARTE O NO DE LA CADENA LA INGRESA AL ARRAY DE LETRASREPETIDAS
    else if(!cadenaSinEspacios.includes(letraInput) || (cadenaSinEspacios.includes(letraInput))) {
        letraRepetidaArray.push(letraInput)    
        console.log(letraRepetidaArray)        
    }  
    
// COMPARACIÓN NÚMERO DE INTENTOS
    if (intentos == 1) {
            console.log(circulo());
        } else if (intentos == 2) {
            console.log(tronco());
        } else if (intentos == 3) {
            console.log(brazoDer());
        } else if (intentos == 4) {
            console.log(brazoIzq());
        } else if (intentos == 5) {
            console.log(piernaDer());
        } else if (intentos == 6) {
            console.log(piernaIzq());
        }
        if (intentos >= 6) {
           
// MUESTRO Y OCULTO CONTROLES SEGÚN EL NÚMERO DE INTENTOS

            esconderMenuDerrota();
            document.querySelector(".palabra-Secreta").innerHTML ="La palabra secreta era " + palabrasArray;
        } else {
            if (palabraGuiones.indexOf('_') < 0) {
                esconderMenuVictoria();
            }            
        }            
    } 
   
// MUESTRO EN ETIQUETAS LA PALABRA SECRETA, LOS INTENTOS Y LA LETRA INGRESADA
    document.querySelector("#output").innerHTML = palabraGuiones;
    document.querySelector("#intentos").innerHTML = intentos;
    document.getElementById("letra-input").value = '';
    document.getElementById("letra-input").focus();
    document.querySelector(".palabra-Secreta").innerHTML ="La palabra secreta era " + palabrasArray;
    document.querySelector(".palabra-Secreta2").innerHTML ="La palabra secreta era " + palabrasArray;
    document.querySelector(".numero-Intentos").innerHTML = "El número de fallos fue " + intentos;
    document.querySelector(".numero-Intentos2").innerHTML = "El número de fallos fue " + intentos;
    document.querySelector(".letras-Digitadas").innerHTML = "Usted digitó las letras " +  letraRepetidaArray
    document.querySelector(".total-Letras").innerHTML = "Total letras " + letraRepetidaArray
});

/**
 *  REINICIO EL JUEGO USANDO onclick="window.location.reload()"
 *  QUE SE ENCUENTRA EN EL CÓDIGO HTML EN EL BOTÓN NUEVO-JUEGO
 */
let botonNuevoJuego = document.querySelector("#nuevo-juego")
botonNuevoJuego.addEventListener("click", function () {
   reiniciarJuego();
})


