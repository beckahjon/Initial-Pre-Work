//I learned that if you have many values to choose from, you can use a switch statement, which tests a value and can define various values with case statements. They are executed until a break is encountered.
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    return "alpha";
    break;
    case 2:
    return "beta";
    break;
    case 3:
    return "gamma";
    break;
    case 4:
    return "delta";
    break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(3);
