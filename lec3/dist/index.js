"use strict";
//create a function which accept onr parameter---- either number array[] or string array[];
Object.defineProperty(exports, "__esModule", { value: true });
function firstValue(arg) {
    return arg[0];
}
let result1 = firstValue(["A", "B", "C"]);
//val.toLowercase();
//using generics
function firstValue2(arg) {
    return arg[0];
}
let val2 = firstValue2(["A", "B", "C"]);
val2?.toLowerCase();
let val3 = firstValue2([1, 2, 3]);
val3?.toString(2);
let user1 = {
    name: "John",
    age: 30,
    // phone:1234567890
};
console.log(user1.phone);
//# sourceMappingURL=index.js.map