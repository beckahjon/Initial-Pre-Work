//You can also use a range of two specific numbers to generate a random number that falls between the two.
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax- myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(3, 11);
