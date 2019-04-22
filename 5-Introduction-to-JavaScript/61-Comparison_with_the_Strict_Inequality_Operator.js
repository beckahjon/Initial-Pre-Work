//Just like the strict equality operator, the strict inequality operator will not convert data types. It returns false where strict equality would return true and vice versa.
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);
