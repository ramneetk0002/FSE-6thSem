
function isAllowedToVote(age){
    if (age<18){
        return false;
    }
    return true;
}
let result=isAllowedToVote();
console.log(result);

let user={
    name:"Ridhima"
}
console.log(isAllowedToVote(user.age));
