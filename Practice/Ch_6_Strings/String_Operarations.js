// length
let str1="You are welcome to the coding surface!!";
console.log(str1.length);
// 2
let str2="Hello";
console.log(str2.length);


// String Concat(Merging sttrings)
let str3="Hi";
let str4="Hii";
console.log(str3+str4);
// 2
let str5="bye";
let str6='hiii';
console.log(str5+str6);


// Escape Char(single quotes,double quotes,backslash(\' - Inserts a single quote  || \" - Inserts a double quote || \\ - Inserts a backslash))

// breaking long string
let str7=("You are welcome to the \  coding space");
console.log(str7);
// 2
let str8=("hi \ i hope you \ are doing good");
console.log(str8);


// Substring(substr)
let str9="javaScript Tutorial";
let substr=str9.substr(0,10);
console.log(substr);
// 2
console.log(str9);
let substr1=str9.substr(1,6);
console.log(substr1);



// trimStart(removes whitespaces from the starting)
let stra=" Soul";
console.log(stra);
let part=stra.trimStart()
console.log(part);
// 2
let strb="  Akanksha";
console.log(strb);
let part1=strb.trimStart();
console.log(part1);



// trimEnd(removes whitespaces from the end)
let strc="Akanksha    ";
console.log(strc);
let part2=strc.trimEnd();
console.log(part2)
// 2
let strd="Akku   ";
console.log(strd);
let part3=strd.trimEnd();
console.log(part3);



// padStart(pad a string with another sring until it reaches to the given length)
let stre="Akku";
console.log(stre);
stone=stre.padStart(8,"Mind");
console.log(stone);
// 2
let strf="Hiii";
console.log(strf);
res=strf.padStart(14,"Shreyanshi");
console.log(res);




// padEnd(add a string to right)
let strg="Hiii";
console.log(strg);
res=strg.padEnd(14,"Shreyanshi");
console.log(res);
// 2
let strh="English";
console.log(strh);
res=strh.padEnd(15,"Language");
console.log(res);




// charAt(return the char at specified index)
let name="Hello is there anyine this side?";
let ans="No!"
console.log(name);
console.log(ans);
console.log(name.charAt(3));
console.log(ans.charAt(2));
// 2
let stri="Dell is a Hardware Company";
let strj="HP is too";
console.log(stri.charAt(10));
console.log(strj.charAt(2));




// split(splits the string into array)
let strk="Dell*is*a*hardware*company";
console.log(strk.split("*"));
// 2
let strl="Del-is-a-hardware-company";
console.log(strl.split("-"));




