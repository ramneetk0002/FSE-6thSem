//you can implement class using interface

interface Emp{
    name:string,
    empId:string,
    salary:number
    getSalary():number;
}

class SD implements Emp{
    name: string;
    empId: string;
    salary: number;
    constructor(name:string, empId:string, salary:number){
        this.name = name;
        this.empId = empId;
        this.salary = salary;
    }
    getSalary():number{
        return this.salary;
    }
    pushcode():string{
        return "Code pushed successfully";
    }
}
class Manager implements Emp{
    name: string;
    empId: string;
    salary: number;
    constructor(name:string, empId:string, salary:number){
        this.name = name;
        this.empId = empId;
        this.salary = salary;
    }
    getSalary():number{
        return this.salary;
    }
}
//headfirst design pattern