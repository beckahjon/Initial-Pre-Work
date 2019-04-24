//The var keyword means the variable is declared globally, or locally within a function. If you use the let keyword, the variable is only declared within a block, statement, or expression, that block, statement, or expression. Let allows you to assign scope to a variable. It is helpful to use different variable names when programming a similar function.
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
   let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
