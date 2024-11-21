var x=0;
var y=1;
var z=2;
console.log(Number.isFinite(x));
console.log(Number.isFinite(y));
console.log(Number.isFinite(z));

// 2
function check(x,y){
    return x/y;
}
console.log(Number.isFinite(check(0,11)));
console.log(Number.isFinite(check(10,0)));

// 3
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));