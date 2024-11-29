class A{
    display(){
        console.log("A is invoked");
        
    }
}
class B extends A{
    display(){
        console.log("B is invoked");
        
    }

}
let a=[new A(),new B()]
a.forEach(function(msg){
    msg.display();
});