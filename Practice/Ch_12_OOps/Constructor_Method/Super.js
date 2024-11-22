class CompanyName{
    constructor(){
        this.company="Javatpoint";
    }
}
class Employee extends CompanyName{
    constructor(id,name){
        super();
        this.id=id;
        this.name=name;
    }
}
let emp=new Employee(1,"Akanksha");
let emp2=new Employee(2,"Akku")
console.log(emp.id+" "+emp.name+" "+emp.company);
console.log(emp2.id+" "+emp2.name+" "+emp2.company);

// 2
class CollegeName{
    constructor(){
        this.CollegeName="PCCCS";
    }
}
class Student extends CollegeName{
    constructor(id,name){
        super();
        this.id=id;
        this.name=name;
    }
}
let s1=new Student(1,"Akanksha");
let s2=new Student(2,"Akku");
console.log(s1.name+" "+s1.id+" "+s1.CollegeName);
console.log(s2.name+" "+s2.id+" "+s2.CollegeName);


