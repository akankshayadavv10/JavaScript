let choice =parseInt(prompt("1)Class\n2)Division\n3)Feedback\nEnter your choice"));
switch(choice){
    case 1:
        alert("You are on the Class Page");
        let choice1 =parseInt(prompt("1)V\n2)VI\n3)VII\nEnter your choice"));
        switch(choice1){
            case 1:
                alert("Welcome to V Class!");
                break;
                case 2:
                    alert("Welcome to VI Class");
                    break;
                    case 3:
                    alert("Welcome to VII class");
        }
        break;
        case 2:
            alert("You are on the Division page");
            let choice2 =parseInt(prompt("1)A\n2)B\n3)C\n4)D\n5)E\nEnter your choice"));
            switch(choice2){
                case 1:
                    alert("You've entered A division");
                    break;
                    case 2:
                        alert("You've entered B division");
                        break;
                        case 3:
                            alert("You've entered C division");
                            break;
                            case 4:
                                alert("You've entered D division");
                                break;
            }
            break;
            case 3:
                alert("You are on the Feedback page");
                let choice3 =parseInt(prompt("1)Very Good!\n2)Good!!\n3)Average!!!\n4)Satisfied!!!!\n5)Not Satisfied!!!!!!\nEnter your choice"));
                switch(choice3){
                    case 1:
                        alert("Thank You So much");
                        break;
                        case 2:
                        alert("Thank You");
                        break;
                        case 3:
                        alert("Thank You");
                        break;
                        case 4:
                        alert("Thank You, we'll improve:)");
                        break;
                        case 5:
                        alert("Thank You, we'll improve:)");
                        break;
                }
                default:
                    alert("Please Check the Options,Provided To You!")
}
