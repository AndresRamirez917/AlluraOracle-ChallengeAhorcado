String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}

//declaro la no visibilidad de estos controles al iniciar
controlesNoVisibles();

//declaro variables
let palabras = [];
let palabraGuiones;
let intentos = 0;
let ingresarPalabra;

//Agrego la palabra 
let botonAgregarPalabra = document.querySelector("#agregar-palabra");
botonAgregarPalabra.addEventListener("click", function () {
    //comparo la palabra segun reglas en el código html
    ingresarPalabra = document.querySelector("#input-palabra").value;
    if (ingresarPalabra == "" || /^[a-z]\s+$/.test(ingresarPalabra)) {
        alert("Tienes Que Ingresar Una Palabra Para Jugar")
    } else {
        //ingreso la palabra del input al array
        palabras.push(ingresarPalabra);
        document.querySelector("#input-palabra").disabled = "true"
        document.querySelector("#agregar-palabra").disabled = "true"
        document.querySelector("#iniciar-juego").disabled = "true"
        //ingresarPalabra = palabras[Math.floor(Math.random()*palabras.length)];
        palabraGuiones = ingresarPalabra.replace(/./g, "_ ");
        document.querySelector("#input-palabra").value = "";
        document.querySelector("#iniciar-juego").style.display = "flex"
    }
})

//muestro los controles del juego
let botonIniciarJuego = document.querySelector("#iniciar-juego");
botonIniciarJuego.addEventListener("click", function () {
    mostrarMenu();
    horca();
    document.getElementById("letra-input").focus();
    document.querySelector("#jugar").style.display = "none";
})

let botonCompara = document.querySelector("#boton-compara")
botonCompara.addEventListener("click", function () {
    //igualo la variable al valor del input, remplazo por guiones 
    //y comparo segun reglas en el código html
    let letraInput = document.querySelector("#letra-input").value
    if (letraInput == "" || /^[a-z]\s+$/.test(letraInput)) {
        alert("Debe De Ingresar Una Letra Para Comparar")
    } else {
        //remplazo la palabra por guiones
        for (let i in ingresarPalabra) {
            if (letraInput == ingresarPalabra[i]) {
                palabraGuiones = palabraGuiones.replaceAt(i * 2, letraInput);
            }
        }
        //comparación de intentos
        if (!ingresarPalabra.includes(letraInput)) {
            intentos++;
        }
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

            //muestro y oculto controles según el resultado de intentos
            esconderMenuDerrota();
        } else {
            if (palabraGuiones.indexOf('_') < 0) {
                esconderMenuVictoria();
            }
        }
    }
    //muestro en etiquetas la palabra secreta, los intentos y la letra ingresada    
    document.querySelector("#output").innerHTML = palabraGuiones;
    document.querySelector("#intentos").innerHTML = intentos;
    document.getElementById("letra-input").value = '';
    document.getElementById("letra-input").focus();
});

//reinicio el juego usando onclick="window.location.reload()"
//que se encuentra en el código html en el botón nuevo-juego
let botonNuevoJuego = document.querySelector("#nuevo-juego")
botonNuevoJuego.addEventListener("click", function () {
   reiniciarJuego();
})


