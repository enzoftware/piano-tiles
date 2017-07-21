// useful reference : 
// https://www.w3schools.com/jsref/default.asp

const first = "this is a string";
const second = String('this is a string');
console.group('Primitives vs Objects');
  console.log(first === second);
  console.log(
    typeof first,
    typeof String('this is a string'),
    typeof new String()
  );
console.groupEnd();

const sentence = 'this is my sentence';

console.group('Strings');
  console.log(first.toUpperCase()); // THIS IS A String
  console.log(sentence.startsWith('this is')); //true
  console.log(':D '.repeat(20)); // :D x20

console.groupEnd();

console.group('Numbers and Math');
  console.log((1).toString() ); // 1
  console.log(Number.isInteger(12)); // true
  console.log(Number.isInteger(12.6)); // false
  console.log((1.25654).toFixed(2)); // 1.26
  console.log(
    Math.floor(6.3); // 6
    Math.ceil(1.56); // 2
  );
console.groupEnd();



const myArray = [ 'andres ', 'rodrigo' ,'enzo' ];

console.group('Arrays');

  console.log(myArray.length); // 3
  console.log(myArray.join('-')); // andres-enzo-rodrigo
  console.log(myArray.push('xd'),myArray); // andres , enzo , rodrigo , xd
  console.log(myArray.pop() , myArray); // andres  , enzo , rodrigo

  myArray.forEach( (user) => console.log(user)); // andres enzo rodrigo);

console.groupEnd();
