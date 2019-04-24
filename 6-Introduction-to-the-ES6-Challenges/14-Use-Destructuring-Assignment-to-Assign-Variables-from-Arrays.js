//You can destructure arrays just like you destructure objects. With the spread operator, you can't pick or choose which elements you want to assign to variables, because it unpacks all contents of an array into a comma-separated list. Destructuring allows you to assign a value to any variable in the array.
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b,a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
