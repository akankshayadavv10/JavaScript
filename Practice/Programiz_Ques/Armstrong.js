let num=154;
let sum=0;
let temp=num;
while(temp>0){
    let remainder=temp%10;
    sum+=remainder*remainder*remainder;
    temp=parseInt(temp/10);

}
if(sum==num){
    console.log("The given"+" "+num+" "+"is an Armstrong Number!")
}
else{
    console.log("The given"+" "+num+" "+"is  not an Armstrong Number!")
}