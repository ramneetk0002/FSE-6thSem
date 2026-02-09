//create a function which accept onr parameter---- either number array[] or string array[];

type numOrStr = number | string;
function firstValue(arg:numOrStr[]){
    return arg[0];
}
let result1 = firstValue(["A","B","C"]);
//val.toLowercase();
//using generics
function firstValue2<T>(arg:T[]){
    return arg[0];
}
let val2= firstValue2<string>(["A","B","C"]);
val2?.toLowerCase();
let val3= firstValue2<number>([1,2,3]);
val3?.toString(2);
// what does the question mark do in the above code?
//optional 
interface User{
    name:string;
    age:number;
    phone?:number;
}
let user1:User={    
    name:"John",
    age:30,
   // phone:1234567890
}
//console.log(user1.phone);
function getPhone(arg:User):number{
    if("phone" in arg){
    return arg.phone;
}else{
    return 0;
}}
let result:number=getPhone(u1);

interface Person{
    role:string;
    permission?:string[];
}
let user:Person={
    role:"user"
}
let admin:Person={
    role:"admin",
    permission:["write","read","delete"]
}
function writeBlog(user:Person){
    if("permission" in user){
    let permission=user.permission ;
    if(permission.includes("write")){
        //do task
        return "blog is written";
    }
}
    return "no authorize";
}
writeBlog({role:"user"});

// ques
//type move="up"|"down"|"left"|"right";
type success={
    status:"200";
    data:[];
}
type error={
    status:"404" ;
    message:""
}
type apiResponse= success | error;

function sendResponse(res:apiResponse){
    if(res.status==="200"){
        return res.data;
    }else{
        return res.message;
    }
}
