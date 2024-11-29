function A(){

}
A.prototype.display=function(){
    return "A is Invoked";
}
function B(){

}
B.prototype=Object.create(A.prototype);
let a=[new A(),new B()]
a.forEach(function (msg){
    console.log(msg.display());
    
}); 