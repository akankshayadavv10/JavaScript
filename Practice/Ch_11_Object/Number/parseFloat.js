var a="50";  
var b="50.25"  
var c="String";  
var d="50String";  
var e="50.25String" 
console.log(Number.parseFloat(a))
console.log(Number.parseFloat(b))
console.log(Number.parseFloat(c))
console.log(Number.parseFloat(d))
console.log(Number.parseFloat(e))


// 2
var f="10";
var g="50.54";
var h=f+g;
console.log("Before invoking parseFloat():"+h+"<br>")
var c=Number.parseFloat(f)+Number.parseFloat(g);
console.log("After invoking pasrseFloat():"+h)