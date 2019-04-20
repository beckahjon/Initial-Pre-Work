//You can use the concatenation operator to fill in missing pieces of a string.
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  result += "The "+myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb+".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("accordion", "wheezy", "sighed", "sadly");
