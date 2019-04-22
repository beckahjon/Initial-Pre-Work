//I learned you can use if statements to make decisions in code. The word if tells JavaScript to execute code within the curly braces if certain conditions are met. They may only be true or false, and if the condition evaluates to true, the program executes the statement. If it is false, the statement does not execute.
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
  return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
