class Student{
    constructor(){
        var name;
        var marks;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name;
    } 
    getMarks(){
        return this.marks;
    }
    setMarks(){
        this.marks=marks;
    }
}
let stud=new Student();
stud.setName("Akanksha");
stud.getMarks(90);
console.log(stud.getName()+" "+stud.getMarks());