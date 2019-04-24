//The var keyword can be overwritten, so it is better to use a keyword like let. Let means a variable with the same name can only be used once. You can also enable Strict Mode, which can catch common coding mistakes or unsafe actions.
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
