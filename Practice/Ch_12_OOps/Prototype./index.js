function Employee(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
Employee.prototype.fullName=function(){
    return this.firstName+" "+this.lastName;
}
let employee1=new Employee("Akanksha","Yadav");
let employee2=new Employee("Akku","Yadav");
console.log(employee1.fullName());
console.log(employee2.fullName());