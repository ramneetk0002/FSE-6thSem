// Union type
type NumberOrString = number | string;

let a: NumberOrString;
a = 10;
a = "18";

// Employee interface
interface Employee {
    name: string;
    employeeId: string;
    age: number;
    dept: string;
    salary: number;
    phone_no: number;
}

// TeamLead interface
interface TeamLead {
    name: string;
    employeeId: string;
    age: number;
    dept: string;
    salary: number;
    project_id: number;
    project_name: string;
    isActive: boolean;
}
//union of employee and teamlead
type EmpOrTeam = Employee | TeamLead;

let emp1:EmpOrTeam ={
    name:"Tanushwi",
    employeeId: "TL101",
    age: 20,
    dept: "CSE",
    salary: 50000,
    phone_no: 8307418010,
    project_id: 201,
    project_name: "Restaurant App",
    isActive:true
};

//intersection type --> &
type EmpAndTeam = Employee & TeamLead;

let emp2:EmpAndTeam ={
    name:"Tanushwi",
    employeeId: "TL101",
    age: 20,
    dept: "CSE",
    salary: 50000,
    phone_no: 8307418010,
    project_id: 201,
    project_name: "Restaurant App",
    isActive:true
};
//can i create union or intersection type using interface-> No
// interface is expandable but type is not expandable we cant make interface more than one time it just add properties in it
 console.log(emp1.age);