// Some(check atleast one element specifies the condn)
    function divby2(element,index,array){
        return element%2==0;
}
let arr=[2,40,50];
let ans=arr.some(divby2);
console.log(ans);

// 2
function isGreaterThan(element,index,array){
    return element>6;
}
let arr1=[2,5];
let ans1=arr1.some(isGreaterThan);
console.log(ans1);


// reduce(Reduce an array into single value)
let num=[3,5,9,90];
let sub=num.reduce(subtract);
function subtract(total,num,index,array){
    return total-num;
}
console.log(sub);

// 2
function addition(total,num,index,array){
    return total+num;
}
let arr2=[3,5,7,8];
let ans2=arr2.reduce(addition);
console.log(ans2);

// 3
function multiply(total,num,index,array){
    return total*num
}
let arr3=[2,5,7,1];
let ans3=arr3.reduce(multiply);
console.log(ans3);


// map(creates a new array by calling a function)
let numbers=[2,4,6,7];
let answer=numbers.map(squarert)
function squarert(){
    return numbers.map(Math.sqrt)
}
console.log(answer)

// 2
function square(element,index,array){
    return element*element;
}
let number1=[2,5,78,0];
let answer1=number1.map(square);
console.log(answer1)
