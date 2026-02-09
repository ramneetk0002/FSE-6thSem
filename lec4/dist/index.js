"use strict";
//enum ---> set of constant values
Object.defineProperty(exports, "__esModule", { value: true });
// function addblog(role:string):string{
//     if(role==="user"){
//         return "not allowed to add blog"
//     }else{
//         return "allowed to add blog"
//     }
// }
function addblog(role) {
    if (role === "user") {
        return "not allowed to add blog";
    }
    else {
        return "allowed to add blog";
    }
}
addblog("admin");
addblog("user");
//addblog("guest");
// enum Role2{
//     user, 
//     admin
// }
// enum Role2{
//     user=10, 
//     admin
// }
var Role2;
(function (Role2) {
    Role2["user"] = "user";
    Role2["admin"] = "admin";
})(Role2 || (Role2 = {}));
console.log(Role2.user); //0
console.log(Role2.admin); //1
function addblog2(role) {
    if (role === "user") {
        return "not allowed to add blog";
    }
    else {
        return "allowed to add blog";
    }
}
addblog(Role2.user);
addblog(Role2.admin);
//# sourceMappingURL=index.js.map