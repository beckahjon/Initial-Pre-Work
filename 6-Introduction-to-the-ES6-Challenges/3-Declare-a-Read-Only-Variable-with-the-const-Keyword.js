//When you use the const keyword, the variable you assign it to becomes read-only. This means they cannot be reassigned. This is useful if you don't want to accidentally reassign something that is meant to stay constant. Name constants using all uppercase letters and an underscore to separate words.
function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
