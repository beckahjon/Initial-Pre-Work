//I learned that in addition to a named export you can also use an export default. This is used if only one value is being exported from a file, or to create a fallback value. You can only have one value be a default export. You can't use export default with var, let, or const.
"use strict";
export default function subtract(x,y) {return x - y;}
