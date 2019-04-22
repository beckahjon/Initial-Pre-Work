//Strict equality does not perform a type conversion, so in order for the function to return equal the two values must be exactly the same.
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(7);
