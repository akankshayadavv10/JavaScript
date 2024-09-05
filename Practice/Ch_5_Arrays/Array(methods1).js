let arr=[10,20,"Akanksha",true]
console.log(arr);

// length(check the length of the array)
console.log(arr.length);

// toString(convert the array into string)
console.log(arr);
let a=arr.toString();
console.log(a);
console.log(typeof a);

// join(joins the lement of the array with seperator and that too should be in "");
console.log(arr);
let b=arr.join("|");
console.log(b);

// delete(delete the element)
delete arr[1];
console.log(arr);

delete arr[0];
console.log(arr);

// concat(merfe two or more arrays)
let arr2=[1,"Hello",2,"Akku"];
let newArr=arr.concat(arr2);
console.log(newArr);

// push(add the element at last of array)
console.log(arr);
arr.push(200,3);
console.log(arr);

// unshift(add the lelemnt at the starting of the array)
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


// reverse(reverse the eleemnt of the array)
console.log(arr);
console.log(arr.reverse());

// values()
const fruits=["Apple","Banana","Cherry"];
const arrFruits=fruits.values();
 for(const value of arrFruits){
    console.log(value);
}

// // fill(fill the array with given static values)
let array= new Array(10);
array.fill("Helllo");
console.log(array);

// // includes(check whether element is included or not)
console.log(arr);
let a1=arr.includes(50);
console.log(a1);