//You can have multiple conditions by chaining them together using multiple conditional operators.
function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(-42);
