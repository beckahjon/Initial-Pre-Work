//Sometimes you want to collect the rest of the elements into a separate array. You can use variables to remove some values and then the rest operator will get the rest of the values in an array. The rest operator only works correctly as the last variable in a list, so you can't grab something from the middle and leave out the last element of the original array.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a, b, ...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
