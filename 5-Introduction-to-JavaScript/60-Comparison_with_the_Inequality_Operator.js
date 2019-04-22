//The inequality operator operates much like the equality operator, and will convert data types. This operator returns false when the equality operator returns true and vice versa.
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
