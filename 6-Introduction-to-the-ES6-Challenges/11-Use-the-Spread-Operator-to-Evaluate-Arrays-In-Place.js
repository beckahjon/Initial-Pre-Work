//If there are multiple parameters or elements expected, you can use the spread operator to expand arrays. This only works in-place, in an argument to a function or an array literal.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
