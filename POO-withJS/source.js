const hero = {
  name : 'Bruce Wayne',
  alias : 'Batman' ,
  phrase : 'To the batcave'
  speak : function () {
    return ' Hey ' + this.phrase;
  }

  attack : function (sound) {
      return ' (hit that bad guy) $(sound)';
  }

};

var whatLookingFor = 'alias';

console.log(hero.name);     //  The same result Bruce Wayne
console.log(hero['name']);  //  The same result Bruce Wayne

console.log(hero[whatLookingFor]); // Batman

console.log(hero.speak); //Hey To the batcave
console.log(hero.attack('POW!!!')); // (hit sound for that bad guy) POW!!!
'this is my string'.toUpperCase(); // THIS IS MY STRING
//EVERYTHING IN JS IS CONSIDER AN OBJECT

"THIS IS A MAYUS STRING CONVERT TO MIN".toLowerCase();
