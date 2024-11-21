class Employee{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    detail(){
        console.log(this.id+" "+this.name)
    }
}
let e1=new Employee(101,"Akanksha Yadav");
let e2=new Employee(102,"Shregun Yadav")
e1.detail();
e2.detail();