let ComputerMove="";
function playComputer(){
    ComputerMove=Math.random()
    if(ComputerMove<0.3){
        ComputerMove="Rock";
    }
    else if(ComputerMove<0.6){
        ComputerMove="Paper";
    }
    else{
        ComputerMove="Scissor"
    }
return ComputerMove;
}

function playedRock(){
    let  move =playComputer()
     if(move=="Rock"){
         alert(`You choose Rock and Computer choosen ${move}, so Game is TIED!`)
     }
     else if(move=="Paper"){
         alert(`You choose Rock and Computer choosen ${move}, so Computer WINS`)
 
     }
     else{
         alert(`You choose Rock and Computer choosen ${move}, so You WINS!`)
     }
 }
 function playedPaper(){
    let  move =playComputer()
     if(move=="Rock"){
         alert(`You choose Paper and Computer choosen ${move}, so you WiNS!`)
     }else if(move=="Paper"){
         alert(`You choose Paper and Computer choosen ${move}, so the game TIED!`)
 
     }else{
         alert(`You choose Paper and Computer choosen ${move}, so Computer WINS!`)
     }
 }
 function playedScissor(){
    let  move =playComputer()
     if(move=="Rock"){
         alert(`You choose Scissor and Computer choosen ${move}, so Computer WINS!`)
     }else if(move=="Paper"){
         alert(`You choose Scissor and Computer choosen ${move}, so you WINS!`)
 
     }else{
         alert(`You choose Scissor and Computer choosen ${move}, so game is TIED!`)
     }
 }