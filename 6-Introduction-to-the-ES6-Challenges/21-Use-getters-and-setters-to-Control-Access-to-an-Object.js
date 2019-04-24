//There are functions called getters and setters that can obtain values from an object and set a value of a property within an object. Getter functions return the value of an object's private variable to the user without the user accessing the private variable. Setter functions set the value of an object's private variable based on the value that is passed into the setter function. These functions can hide internal implementation details.
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(comfy) {
      this._comfy = comfy;
    }
    get thermos() {
      return this._comfy
    }
    set thermos(tooChilly) {
      this._comfy = tooChilly;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
