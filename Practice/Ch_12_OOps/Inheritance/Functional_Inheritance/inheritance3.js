function Animal(name){
    const obj={};
    obj.name=name;

    obj.sound=function(){
        console.log("Some generic sound");
        
    };
    return obj;
}
function Cat(name,breed){
    const obj=Animal(name);
    obj.breed=breed;
    obj.sound=function(){
        console.log("Meow! Meow!");
        
    };
    return obj;
}
let myCat=  Cat("Buddy","Labrador");
myCat.sound();