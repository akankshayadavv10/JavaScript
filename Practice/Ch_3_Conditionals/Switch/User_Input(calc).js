let number1=Number(prompt("Enter the value of Number1: "));
let number2=Number(prompt("Enter the value of Number2: "));
const operator=prompt("Enter a Operator(either +,-,* or %): ");
switch(operator){
    case "+":
        result=number1+number2;
        console.log("The Sum of Number is:"+(result));
        break;
        case "-":
        result=number1-number2;
        console.log("The subtraction of number is:"+(result));
        break;
        case "*":
            result=number1*number2;
            console.log("The Multiplication of numbers is:"+(result));
            break;
            case "/":
                result=number1-number2;
                console.log("The Division of numbers is:"+(result));
                break;
                default:
                    console.log("Invalid Operator");
}