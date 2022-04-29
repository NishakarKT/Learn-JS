import {name, sum} from "./modules.js";
// "import" specifies the properties/methods to be imported...

console.log(name, sum(2,3));

// renamed import...
// import {name as n, sum as s} from "./modules.js";

// import all...
// import * as module from "./modules.js";

// default function
// import {default as defaultFunc} from "./modules.js";
// ~ import defaultFunc from "./modules.js";
import defaultFunc from "./modules.js";
console.log(defaultFunc());

// aggregate/bridge modules import
import {sum as sm} from "./bridge.js";
console.log(sm(2,3));

