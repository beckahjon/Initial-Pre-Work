//ES6 has another useful tool called import. This allows you to choose a part of a module or file to load, rather than using require() and geting the whole thing.
"use strict";
capitalizeString("hello!");
import { capitalizeString } from "string_functions"
