let canvas = document.querySelector("canvas");
let pincel = canvas.getContext("2d");

function clearCanvas() {
  // let pincel = canvas.getContext("2d");
  pincel.clearRect(0, 0, canvas.width, canvas.height);
}

function base1() {
  canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    let pincel = canvas.getContext('2d');
    if (pincel) {
      pincel.lineWidth = 6;
      pincel.strokeStyle = "#FAAC58";
      pincel.beginPath();
      pincel.moveTo(130, 80);
      pincel.lineTo(150, 150);
      pincel.stroke();   
    }
  }
}

function base2() {
  canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    let pincel = canvas.getContext('2d');
    if (pincel) {
      pincel.lineWidth = 6;
      pincel.strokeStyle = "#FAAC58";
      pincel.beginPath();
      pincel.moveTo(130, 80);
      pincel.lineTo(105, 150);
      pincel.stroke();   
    }
  }
}

  function linea1() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let pincel = canvas.getContext('2d');
    pincel.beginPath();
    pincel.fillStyle = "#FAAC58";
    pincel.fillRect(124,-250,10,400);
    }
  }

  function linea2() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let pincel = canvas.getContext('2d');
    pincel.beginPath();
    pincel.fillStyle = "#FAAC58";
    pincel.fillRect(124,0,150,10);
    }
  }

  function linea3() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let pincel = canvas.getContext('2d');
    pincel.beginPath();
    pincel.fillStyle = "#FAAC58";
    pincel.fillRect(274,0,10,40);
    }
  }

  function circulo() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let pincel = canvas.getContext('2d');
        pincel.fillStyle = "rgb(112, 128, 144)";
pincel.beginPath();
pincel.arc(280,40,15,0,2*3.14);
pincel.fill();
    }
  }

  function tronco() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let pincel = canvas.getContext('2d');
    pincel.fillStyle = "yellow";
    pincel.beginPath();
    pincel.fillStyle = "rgb(112, 128, 144)"
    pincel.fillRect(274,53,10,50);
    }
  }

  function brazoDer() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let pincel = canvas.getContext('2d');
      if (pincel) {
        pincel.lineWidth = 6;
        pincel.strokeStyle = "rgb(112, 128, 144)";
        pincel.beginPath();
        pincel.moveTo(280, 80);
        pincel.lineTo(300, 50);
        pincel.stroke();   
      }
    }
  }

  function brazoIzq() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let pincel = canvas.getContext('2d');
      if (pincel) {
        pincel.lineWidth = 6;
        pincel.strokeStyle = "rgb(112, 128, 144)";
        pincel.beginPath();
        pincel.moveTo(280, 80);
        pincel.lineTo(255, 50);
        pincel.stroke();   
      }
    }
  }

  function piernaDer() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let pincel = canvas.getContext('2d');
      if (pincel) {
        pincel.lineWidth = 6;
        pincel.strokeStyle = "rgb(112, 128, 144)";
        pincel.beginPath();
        pincel.moveTo(278, 100);
        pincel.lineTo(300, 130);
        pincel.stroke();   
      }
    }
  }

  function piernaIzq() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let pincel = canvas.getContext('2d');
      if (pincel) {
        pincel.lineWidth = 6;
        pincel.strokeStyle = "rgb(112, 128, 144)";
        pincel.beginPath();
        pincel.moveTo(278, 100);
        pincel.lineTo(250, 130);
        pincel.stroke();   
      }
    }
  }

  function horca(){
  console.log(linea1());
  console.log(linea2());
  console.log(linea3());
  console.log(base1());
  console.log(base2());
  }  

  function mostrarMenu(){
    document.querySelector("#letra-input").style.display="flex";
    document.querySelector("#boton-compara").style.display="flex";
    document.querySelector("#label-palabra").style.display="flex";
    document.querySelector("#intentos").style.display="flex";  
    document.querySelector("#output").style.display="flex"
    document.getElementById('canvas').style.display="flex"
    clearCanvas()
  }

  function mostrarMenuReinicio(){
    document.querySelector("#output").innerHTML = "";
    document.querySelector(".total-Letras").innerHTML ="";
    document.querySelector("#agregar-palabra").disabled = "true";
    document.querySelector("#iniciar-juego").disabled = "true";
    document.getElementById('canvas').style.display = "flex" 
    // document.querySelector('canvas').style.display="flex"
  }
  
  function esconderMenuVictoria(){
    document.querySelector(".muerte").style.display="none";
    document.querySelector(".homero").style.display="none";
    document.querySelector(".confeti").style.display="flex";
    document.querySelector("#letra-input").style.display="none";
    document.querySelector("#boton-compara").style.display="none";
    document.querySelector("#label-palabra").style.display="none";
    document.querySelector("#label").style.display="none";  
    document.querySelector("#output").style.display="none";
    document.querySelector("#intentos").style.display="none";
    document.querySelector("#jugar").style.display="none";
    document.querySelector("#canvas").style.display = "none"
    // document.querySelector("#palabraSecreta2").style.display="none";
    document.querySelector("#victoria").style.display="flex"
    document.querySelector(".titulo").style.display="none";
  }

  function esconderMenuDerrota(){
    document.querySelector(".muerte").style.display="none";
    document.querySelector(".homero").style.display="flex";
    document.querySelector(".confeti").style.display="none";
    document.querySelector("#letra-input").style.display="none";
    document.querySelector("#boton-compara").style.display="none";
    document.querySelector("#label-palabra").style.display="none";
    document.querySelector("#label").style.display="none";  
    document.querySelector("#output").style.display="none";
    document.querySelector("#intentos").style.display="none";
    document.querySelector("#jugar").style.display="none";
    document.querySelector("#canvas").style.display="none"; 
    document.querySelector("#derrota").style.display="flex"
    document.querySelector(".titulo").style.display="none";
  }

  function ocultarHorca(){
      console.log(linea1()=false);
      console.log(linea2()=false);
      console.log(linea3()=false);
      console.log(base1()=false);
      console.log(base2()=false);
      
  }

function reiniciarJuego(){
  document.querySelector(".homero").style.display="none";
  document.querySelector(".confeti").style.display="none";
  document.querySelector("#victoria").style.display = "none"
  document.querySelector("#derrota").style.display = "none"
  document.querySelector("canvas").style.display = "flex"
  document.querySelector("#agregar-palabra").style.display = "none"
  document.querySelector(".titulo").style.display="flex";
  //document.getElementById('#canvas').style.display="block"
  //horca()
  //clearCanvas()
}

function controlesNoVisibles(){
  document.querySelector("#victoria").style.display = "none"
  document.querySelector("#derrota").style.display = "none"
  document.querySelector("#iniciar-juego").style.display = "none"
}
// export default function() {}