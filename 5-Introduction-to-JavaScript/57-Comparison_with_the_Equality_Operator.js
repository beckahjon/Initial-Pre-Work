//The most basic operator is the equality operator. This compares two values and if they are equivalent will return true and false if not. JavaScript can convert one data type to another using type coercion in order to compare two different types.
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(12);
