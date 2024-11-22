function Employee(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
Employee.prototype.company="Javatpoint";
let emp1=new Employee("Akanksha","Yadav");
let emp2=new Employee("Shree","Kumar");
console.log(emp1.firstName+" "+emp2.lastName+" "+emp1.company);
console.log(emp2.firstName+" "+emp2.lastName+" "+emp2.company);