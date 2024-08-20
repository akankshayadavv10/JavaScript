let x=1;
y="b";
z="x";
switch(x){
    case 1:
        console.log("case 1");
        switch(y){
            case "a":
                console.log("case a");
                break;
                case "b":
                    console.log("case b");
                    break;

        }

        break;
        case 2:
            console.log("case 2");
            switch(z){
                case "X":
                    console.log("case X");
                    break;
                    case "Y":
                        console.log("case Y")
                        break;
            }
}