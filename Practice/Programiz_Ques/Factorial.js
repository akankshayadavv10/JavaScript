let num=5;
if(num<0){
    console.log("Error!,Negative number can have factorials.....")
}
else if(num==0){
    console.log("The factorial of "+num+"is 0");
}
else{
    let fact=1;
    for(i=1;i<=num;i++){
        fact*=i;
    }
    console.log("The factorial of "+num+" "+"is"+" "+fact);
}