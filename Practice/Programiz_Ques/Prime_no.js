let num=10;
let isPrime=true;
if(num==1){
    console.log("Not a composite and nor a prime number!")
}
else if(num>1){
    for(let i=2;i<num;i++){
        if(num%i==0){
            isPrime=false;
        }
    }
}
else{
    console.log("Not a valid number!")
}
if(isPrime){
    console.log("It is a prime number!")
}
else{
    console.log("It is not a prime number!")
}