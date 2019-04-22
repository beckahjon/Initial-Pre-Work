//The logical or operator works in the same way as the logical and operator, except it will return true if either of the operands is true.
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
