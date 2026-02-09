"use strict";
//how to give type to an object 
Object.defineProperty(exports, "__esModule", { value: true });
//1. Using object literal
let user = {
    name: "Ridhima",
    age: 20,
    city: "Ambala"
};
let user2 = {
    name: "Ridam",
    age: 20,
    city: "Saharanpur"
};
let user3 = {
    name: "gyff",
    age: 20,
    city: "vhyjj"
};
let person1 = {
    name: "jhj",
    age: 34
};
//array type 
//let numArr:number[]=[1,"23,true];
let numArr = [1, 23, 0];
let allUsers = [{ name: "dasd", age: 232 }, { name: "dasd", age: 2 }, { name: "dasd", age: 23 }];
function printAllUserName(allUsers) {
    allUsers.forEach((user) => {
        console.log(user.name);
    });
}
printAllUserName(allUsers);
//# sourceMappingURL=index.js.map