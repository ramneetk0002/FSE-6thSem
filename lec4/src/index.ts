//enum ---> set of constant values

type Role="admin" | "user" 

// function addblog(role:string):string{
//     if(role==="user"){
//         return "not allowed to add blog"
//     }else{
//         return "allowed to add blog"
//     }
// }

function addblog(role:Role):string{
    if(role==="user"){
        return "not allowed to add blog"
    }else{
        return "allowed to add blog"
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
enum Role2{
    user="user", 
    admin="admin"
}

console.log(Role2.user); //0
console.log(Role2.admin); //1


function addblog2(role:Role2):string{
    if(role==="user"){
        return "not allowed to add blog"
    }else{
        return "allowed to add blog"
    }
}
addblog(Role2.user);
addblog(Role2.admin);

//type any
let a:any;//treat like javascript
a:"dhhdhd";
a:10;

