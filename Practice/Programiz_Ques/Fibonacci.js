let num=60;
let n1=0,n2=1,NextTerm;
console.log("Fibonacci Series:");
for(let i=1;i<num;i++){
    console.log(n1);
    NextTerm=n1+n2;
    n1=n2;
    n2=NextTerm;
}