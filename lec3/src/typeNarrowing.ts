//typenarrowing;
//runtime value dependency
function upperCase(arg:number|string){
    if (typeof(arg) == "string"){
    return arg.toUpperCase();
    }else{
        return arg;
    }
}
upperCase("hello");