//I learned you can test more than one thing at a time by using the logical and operator. It returns true if the operands to the left and the right are true. It is like nesting an if statement inside another but with shorter code.
function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {

      return "Yes";
    }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(33);
