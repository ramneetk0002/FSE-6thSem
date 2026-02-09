//how to give type to an object 

//1. Using object literal

let user:{name:String, age:number, city:string}={
    name:"Ridhima",
    age:20,
    city:"Ambala"
}

let user2:{name:String, age:number, city:string}={
    name:"Ridam",
    age:20,
    city:"Saharanpur"
}



//2. Using interface
interface User{
    name:string;
    age:number;
    city:string;
}
let user3:User={
    name:"gyff",
    age:20,
    city:"vhyjj"
}

//3. Using type alias
type Person={
    name:string;
    age:number;
}
let person1:Person={
    name:"jhj",
    age:34
}


//array type 
//let numArr:number[]=[1,"23,true];
let numArr:number[]=[1,23,0];

let allUsers:Person[]=[{name:"dasd",age:232},{name:"dasd",age:2},{name:"dasd",age:23}]


function printAllUserName(allUsers: Person[]): void {
    allUsers.forEach((user) => {
      console.log(user.name);
    });
  }
  
  printAllUserName(allUsers);
  