function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function calculate(a,b,operator){
    switch(operator){
        case'add':
        return  add(a,b);
        case'subtract':
        return subtract(a,b);
        case 'multiply':
            return multiply(a,b);
            case 'divide':
                return divide(a/b);
                default:
                    throw new Error("Invalid Operator");
    
    }
}
let result=calculate(3,5,'add');
console.log(result);
