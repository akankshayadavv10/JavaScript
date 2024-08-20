let choice=parseInt(prompt("1)Play\n2)Setting\n3)About\n4)Exit\nEnter the choice: "));
switch(choice){
    case 1:
        alert("The game is started!");
        break;
        case 2:
            alert("Setting page is opened!");
            let innerChoice=parseInt(prompt("1)Keyboard\n2)Mouse\n3Audio\n4Video\nEnter the choice:"));
            switch(innerChoice){
                case 1:
                    alert("Keyboard setting iss opened!");
                    break;
                    case 2:
                        alert("Mouse setting is opened!");
                        break;
                        case 3:
                            alert("Audio setting is opened!");
                            break;
                            case 4:
                                alert("Video setting is opened!")
            }
            break;
            case 3:
                alert("About page is opened!");
                break;
                case 4:
                    alert("The game is quitting!");
                    break;
                    default:
                        alert("Invalid Choice is Entered!!!")

}