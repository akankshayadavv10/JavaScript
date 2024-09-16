// 2.Scientific Notation(etra-large or extra small no.with exponent)
let a=156e5;
console.log(a);
// 2
let b=136e-5;
console.log(b);




// Integer Precision(nos. without periods are accurate upto 15 digits)
let c=222222222222222;
console.log(c);
// 2
let d=29123456789011121314;
console.log(d);



// Floating point precision(is not always 100% accurate due to binary representation)
let x = 0.22 + 0.12;
let y = (0.22 * 10 + 0.11 * 10) / 10;
console.log(x);
console.log(y);




// Adding no. and strings
let e=10;
let f=11;
console.log(e+f);
// 2
let g=12;
let h="Akkku";
console.log(g+h);
// 3
let i="Akanksha";
let j="Akku";
console.log(i+j);




// Numeric Strings(converts numeric strings into numbers)
let k="10"*"10"
let l="10"/"10";
console.log(k);
console.log(l);




// *Numbers Literals
// 1(Decimal Numbers)
let m=10.1;
console.log(m);

// 2(Octal Numbers( starts with 0 and the following number is smaller than 8))
let n = 0562;
console.log(n);

// 3(Binary Numbers(Starts with 0b or 0B followed  by 0 and 1))
let o=0b11;
let p=0B0111;
console.log(o);
console.log(p);

// 4(Hexadecimal(Starts with 0x or 0X))
let q=0xfff;
console.log(q);



//*Number Coersion
// 1(NAN-Not A Number(Involves undefined ))
let r=undefined+10;
console.log(r);

// 2(Null to 0(null value is supposed to be 0))
let s=null+2;
console.log(s);

// 3(Boolean to number(Converts the numbers:1for true and 0 for false))
let t=true+1;
let u=false-11;
console.log(t);
console.log(u);

// 4(String to Number(changes the string into numbers))
let v='42';
let w='Hello';
const numFromString1 = Number(v);
const numFromString2 = Number(w);
console.log(v);
console.log(w);
