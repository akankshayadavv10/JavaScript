let arr=[10,20,"Akanksha",true]
console.log(arr);

length   
console.log(arr.length);

// toString()
console.log(arr);
let a=arr.toString();
console.log(a);
console.log(typeof a);

// join();
console.log(arr);
let b=arr.join("|");
console.log(b);

// delete
delete arr[1];
console.log(arr);

delete arr[0];
console.log(arr);

// concat()
let arr2=[1,"Hello",2,"Akku"];
let newArr=arr.concat(arr2);
console.log(newArr);

// push()
console.log(arr);
arr.push(200,3);
console.log(arr);

// unshift()
console.log(arr);
arr.unshift("HI");
console.log(arr);

// pop-(remove last element)
console.log(arr);
arr.pop();
console.log(arr);

// shift(remove first element)
console.log(arr);
arr.shift();
console.log(arr);

// splice(remove and insert elements)
let number=[20,30,40,50];
let s=number.splice(1,3,);
console.log(s);
console.log(number);

// slice


// reverse()
console.log(arr);
console.log(arr.reverse());

// values()
const fruits=["Apple","Banana","Cherry"];
const arrFruits=fruits.values();
 for(const value of arrFruits){
    console.log(value);
}

// // fill()
let array= new Array(10);
array.fill("Helllo");
console.log(array);

// // includes()
console.log(arr);
let a1=arr.includes(50);
console.log(a1);