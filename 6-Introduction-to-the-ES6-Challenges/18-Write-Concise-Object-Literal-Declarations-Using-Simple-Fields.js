//ES6 also provides a way to eliminate redundancy of having to write two values twice. You can use concise object literal declaractions to easily define object literals.
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  const createPerson = (name, age, gender) => ({name, age, gender});

  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
