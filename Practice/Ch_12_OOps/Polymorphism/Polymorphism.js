    class A{
        display(){
            console.log("A is invoked");
            
        }
    }
    class B extends A{

    }
    let b=new B();
    b.display();