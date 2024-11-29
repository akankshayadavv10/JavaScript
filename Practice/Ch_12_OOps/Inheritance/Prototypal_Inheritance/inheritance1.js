function Animal(name){
    this.name=name;
}
Animal.prototype.sound=function(){
    console.log("Generic Sound");
    
};
function Dog(name,breed){
    Animal.call(this,name);
    this.breed=breed;
}
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;
Dog.prototype.sound=function(){
    console.log("Woof! Woof!");
};
let myDog=new Dog("Buddy", "PitBull");
myDog.sound();