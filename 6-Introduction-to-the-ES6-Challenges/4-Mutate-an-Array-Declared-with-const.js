//Objects including arrays and functions assigned to a const variable are still mutable. The array element is mutable, you just can't use the variable identifier to point to a different array using the assignment operator.
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

   s[0] = 2;
   s[1] = 5;
   s[2] = 7;



  // change code above this line
}
editInPlace();
