// literal way to create object
let student={
    firstName:"Akanksha",
    lastName:"Yadav",
    age:21,
    phone:"+919325265815"
}
console.log(student);

// eg2
let employee={
    salary:"89000",
    firstName:"Pratik",
    lastName:"Singh",
    time:2
}
console.log(employee);




// Accessing Object
console.log(student);
console.log(typeof student);
console.log(student["lastName"]);
console.log(student["firstName"]);
console.log(student["phone"]);





// Create an Object
const person=new Object();
person.name="Akanksha Yadav";
person.age=21;
console.log(person);
console.log(typeof person);
 



// object constructor functions
function car(name,model,year){
    this.name=name;
    this.model=model;
    this.year=year;
}
let car1=new car("BMW","x-Series",2016);
console.log(car1);

// 2
function school(name,city,year){
    this.name=name;
    this.city=city;
    this.year=year;
    this.display=display;
}
function display()
{
    console.log("School Name: ",this.name);
    console.log("School City: ",this.city);
    console.log("School Year: ",this.year);
}
let schl=new school("Wisdom English Medium High School","Pune",19999);
schl.display();