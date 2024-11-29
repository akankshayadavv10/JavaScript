let person1={
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyecolor:"blue"

}
let person2={
firstName:"Martin",
lastName:"Doe",
};
Object.assign(person1,person2);
let text=Object.entries(person1);
console.log(text);