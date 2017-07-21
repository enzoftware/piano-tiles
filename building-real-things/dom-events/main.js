// DOM = Document Object Model
const body = document.querySelector('body');
body.style.backgroundColor = '#C00C00';

//FIRST OPTION OF DOM EVENT - NOT RECOMMENDED
function goSleep() {
  document.body.style.backgroundColor = '#000000';
}

// SECOND OPTION OF DOM EVENT - MORE CLEAN
const coffeButton = document.querySelector('.coffe-btn');
coffeButton.onclick = function() {
  document.body.style.backgroundColor = "#1452ff";
}


coffeButton.onmouseenter = goSleep; // HOVER OVER coffeButton HAPPENS goSleep

function getFoods(){
  document.body.style.backgroundColor = "#00ff00";
}

const foods = document.querySelectorAll('.food-btn');
// BEACAUSE THIS IS AN ARRAY OF BUTTONS
foods.forEach(function(button){
    button.onclick = getFoods;
});



// ======================================================
// THIRD OPTION - REALLY RECOMMENDED

// CLEANEST AND MORE READABLE

const soccerButton = document.querySelector('.soccer-btn');

function soccerMagic(){
  document.body.style.backgroundColor = "#50cce8";
  console.log("My soccer function");
}


soccerButton.addEventListener('click', soccerMagic);
soccerButton.document.addEventListener('mouseenter',getFoods);
