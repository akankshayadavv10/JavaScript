function Student(name,marks){
    let s_name=name;
    let s_marks=marks;
    Object.defineProperty(this,"name",{
        get:function(){
            return s_name;
        },
        set:function(s_name){
            this.s_name=s_name;
        }
    });
    Object.defineProperty(this,"marks",{
        get:function(){
            s_marks;
        },
        set:function(s_marks){
            this.s_marks=s_marks;
        }
    });
    
}
 let stud=new Student("John",80);
 console.log(stud.name+" "+stud.marks);
 