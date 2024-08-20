// 1
let num1=20;
let num2=8;
let num3=30;
if(num1>=num2 && num1>=num3){
    console.log(num1+" "+"is largest among three");
}
else if(num2>=num1 && num2>=num3){
    console.log(num2+" "+"is the largest among three");
}
else{
console.log(num3+" "+"is the largest among all")
}

// 2
let num4=parseInt(prompt("Enter first number!"));
let num5=parseInt(prompt("Enter the second number!"));
let num6=parseInt(prompt("Enter the third number!"));
if(num4>=num5 && num4>=num6){
    document.write(num4+" "+"is largest among three");
}
else if(num5>=num4 && num5>=num6){
    document.write(num5+" "+"is the largest among three");
}
else{
    document.write(num6+" "+"is the largest among three")
}