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


// every(check if all the elements satisfies the condition)
// 1
function divby3(element,index,array){
    return element%3==0

}
let number4=[2,4,6];
let ans4=number4.every(divby3);
console.log(ans4);

// 2
function isPos(element,index,array){
    return element>0;
}
let given=[3,3];
let resultt=given.every(isPos);
console.log(resultt);


// flat(creates a simple array from multiple array)
let given1=[2,3,4,5,[3,4,5],6,7,8];
let newGiven1=given1.flat(1);
console.log(newGiven1);


// flatmap(flatten the input array into new array)
function flattenMap(element,index,array){
    return element*10;
}
let given2=[3,5,6,8];
let result5=given2.flatMap(flattenMap);;
console.log(result5);

// 2
const myAwesomeArray=[[1],[2],[3],[4]];
let result6=myAwesomeArray.flatMap(
(arr)=>arr*20
);
console.log(result6);


// filter(filter the condition)
function filterPos(element,array,index){
    return element>0;
}
let given7=[2,4,6,-8,10];
let result7=given7.filter(filterPos);
console.log(result7);

// find index(used to find the index of the array)
function findIndex(element,array,index){
    return element>20;
}
let given8=[2,5,8,10];
let result8=given8.findIndex(findIndex);
console.log(result8);

// 2
function findIndex2(element,array,index){
    return element>40;

}
let given9=[3,6,80];
let result9=given9.findIndex(findIndex2);
console.log(result9);

// find(used to find the element after satisfying the condtion)
function GretNum(element,index,array){
    return element>90;

}
let given10=[3,6,8,90,400]
let result10=given10.find(GretNum);
console.log(result10);


// fill(used to fillthe value with static array)
let arr10=[1,4,5,90];
arr10.fill(21,6,2);
console.log(arr10);

// revwerse()
let array11=[1,4,8,90];
array11.reverse();
console.log(array11);
