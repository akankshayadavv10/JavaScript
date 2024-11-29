let fruits={
    Banana:200,
    Orange:300,
    Apple:120
}
let txt=" ";
for(let [fruit,amount]of Object.entries(fruits)){
    txt+=fruit+":"+amount;
}
console.log(txt);
