// console.log( reverseString('hel!') )

function capitalize(string){
  string = string[0].toUpperCase() + string.slice(1);
  return string;
}

function reverseString(string){
  // console.log(string[0]);
  let array = Array.from(string);
  for(let i=0; i<array.length/2; i++){
    // console.log( array[i], array[array.length-1-i] );
    [array[i], array[array.length-1-i] ] = [ array[array.length-1-i], array[i] ];
  }
  return array.join('');
}

const calculator = (() => {
  const add = (a, b) => a+b;
  const sub = (a,b) => a-b; 
  const div = (a,b) => a/b;
  const mul = (a,b) => a*b;
  return {add, sub, mul, div}
})();

// console.log(calculator.add(3,4))

module.exports = {capitalize, reverseString, calculator};