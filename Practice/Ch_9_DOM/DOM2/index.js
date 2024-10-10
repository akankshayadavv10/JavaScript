let count=0;
function Add_box(){
    let box=document.createElement("box");
    let text=document.createTextNode( `BOX${++count}`)
    box.appendChild(text);
    box.setAttribute("class","container")
    document.body.appendChild(box)

}