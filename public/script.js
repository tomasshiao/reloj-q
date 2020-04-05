setInterval(hoy, 1000);

function elementos(i) {
  if (i == 0) {
    i = "e-";
    return i;
  } else if (i == 1) {
    i = "H";
    return i;
  } else if (i == 2) {
    i = "He";
    return i;
  } else if (i == 3) {
    i = "Li";
    return i;
  } else if (i == 4) {
    i = "Be";
    return i;
  } else if (i == 5) {
    i = "B";
    return i;
  } else if (i == 6) {
    i = "C";
    return i;
  } else if (i == 7) {
    i = "N";
    return i;
  } else if (i == 8) {
    i = "O";
    return i;
  } else if (i == 9) {
    i = "F";
    return i;
  } else if (i == 10) {
    i = "Ne";
    return i;
  } else if (i == 11) {
    i = "Na";
    return i;
  } else if (i == 12) {
    i = "Mg";
    return i;
  } else if (i == 13) {
    i = "Al";
    return i;
  } else if (i == 14) {
    i = "Si";
    return i;
  } else if (i == 15) {
    i = "P";
    return i;
  } else if (i == 16) {
    i = "S";
    return i;
  } else if (i == 17) {
    i = "Cl";
    return i;
  } else if (i == 18) {
    i = "Ar";
    return i;
  } else if (i == 19) {
    i = "K";
    return i;
  } else if (i == 20) {
    i = "Ca";
    return i;
  } else if (i == 21) {
    i = "Sc";
    return i;
  } else if (i == 22) {
    i = "Ti";
    return i;
  } else if (i == 23) {
    i = "V";
    return i;
  } else if (i == 24) {
    i = "Cr";
    return i;
  } else if (i == 25) {
    i = "Mn";
    return i;
  } else if (i == 26) {
    i = "Fe";
    return i;
  } else if (i == 27) {
    i = "Co";
    return i;
  } else if (i == 28) {
    i = "Ni";
    return i;
  } else if (i == 29) {
    i = "Cu";
    return i;
  } else if (i == 30) {
    i = "Zn";
    return i;
  } else if (i == 31) {
    i = "Ga";
    return i;
  } else if (i == 32) {
    i = "Ge";
    return i;
  } else if (i == 33) {
    i = "As";
    return i;
  } else if (i == 34) {
    i = "Se";
    return i;
  } else if (i == 35) {
    i = "Br";
    return i;
  } else if (i == 36) {
    i = "Kr";
    return i;
  } else if (i == 37) {
    i = "Rb";
    return i;
  } else if (i == 38) {
    i = "Sr";
    return i;
  } else if (i == 39) {
    i = "Y";
    return i;
  } else if (i == 40) {
    i = "Zr";
    return i;
  } else if (i == 41) {
    i = "Nb";
    return i;
  } else if (i == 42) {
    i = "Mo";
    return i;
  } else if (i == 43) {
    i = "Tc";
    return i;
  } else if (i == 44) {
    i = "Ru";
    return i;
  } else if (i == 45) {
    i = "Rh";
    return i;
  } else if (i == 46) {
    i = "Pd";
    return i;
  } else if (i == 47) {
    i = "Ag";
    return i;
  } else if (i == 48) {
    i = "Cd";
    return i;
  } else if (i == 49) {
    i = "In";
    return i;
  } else if (i == 50) {
    i = "Sn";
    return i;
  } else if (i == 51) {
    i = "Sb";
    return i;
  } else if (i == 52) {
    i = "Te";
    return i;
  } else if (i == 53) {
    i = "I";
    return i;
  } else if (i == 54) {
    i = "Xe";
    return i;
  } else if (i == 55) {
    i = "Cs";
    return i;
  } else if (i == 56) {
    i = "Ba";
    return i;
  } else if (i == 57) {
    i = "La";
    return i;
  } else if (i == 58) {
    i = "Ce";
    return i;
  } else if (i == 59) {
    i = "Pr";
    return i;
  }
}

function hoy() {
  var fecha = new Date();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();
  hora = elementos(hora);
  minutos = elementos(minutos);
  segundos = elementos(segundos);
  document.getElementById("reloj").innerHTML = hora + ":" + minutos + ":" + segundos;
};

var app = new Vue({
  el: "#app",
  data:{
    leaderboard: [],
  },
  methods:{
    sumarPts(position){
      app.leaderboard[position].puntaje = app.leaderboard[position].puntaje + 1 ;
      console.log(app.leaderboard[position].puntaje);
      app.leaderboard.sort(function(a, b){return b.puntaje - a.puntaje;})
    },
    restarPts(position){
      app.leaderboard[position].puntaje = app.leaderboard[position].puntaje - 1 ;
      console.log(app.leaderboard[position].puntaje);
      app.leaderboard.sort(function(a, b){return b.puntaje - a.puntaje;})
    }
  }
})


function addPlayer(jugador){
var jugador = {"nombre": "", "puntaje": NaN}
jugador.nombre = document.getElementById("player").value;
jugador.puntaje = parseInt(document.getElementById("score").value);
if (jugador.nombre == ""){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Player must have a name!'
  })
}else if(isNaN(jugador.puntaje)){
  jugador.puntaje = 0;
  console.log(jugador);
  app.leaderboard.push(jugador);
  app.leaderboard.sort(function(a, b){return b.puntaje - a.puntaje;})
  console.log(app.leaderboard);
  jugadorAgregado();
}else{
console.log(jugador);
app.leaderboard.push(jugador);
app.leaderboard.sort(function(a, b){return b.puntaje - a.puntaje;})
console.log(app.leaderboard);
jugadorAgregado();
}
}
function jugadorAgregado(){
  Swal.fire({
  icon: 'success',
  title: 'Player saved!',
  showConfirmButton: false,
  timer: 1500
})
}
