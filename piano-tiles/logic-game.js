var game = document.getElementById('gameStart');
var set =[];
var prev = 0;
var score = 0;
var times = 0;
var width = 1;
var time = 0;
var gameIsOver = false;
var totalTimesSecs = 60; // 60 segundos
var timer = setInterval(function () {
  var per = Math.round((width/totalTimesSecs)*100);
  time++;
  document.getElementById('timer').style.width = per+'%';
  width++;
},1000);

var timerOut = setTimeout(function(){
  gameOver();
},totalTimesSecs*1000);

function genSet(){
  var htmCode = '';
  var blackId = Math.trunc(Math.random()*3);

  if(prev == blackId){
    blackId = Math.round(Math.random()*blackId);
  }
  prev = blackId;

  var titleWidth = (($('mobileDisplay').width())/4)-1;

  for (var i = 0; i < 4; i++) {
    if (i == blackId) {
      htmCode += '<div style = "width:'+titleWidth+'px;" class ="tile black"></div>';
    }else{
      htmCode += '<div style = "width:'+titleWidth+'px;" class ="tile"></div>';
    }
  }
  return htmCode;
}
