let text=document.getElementById("task");
let btn=document.getElementById("btn")
let btn1=document.getElementById("btn1")
let ul=document.getElementById("ul")
let count=0
function addTodo(){
    let li=document.createElement("li");
    let textNode=document.createTextNode(text.value);
    let mark = document.createElement("i");
    mark.classList.add("fa-solid");
    mark.classList.add("fa-check");
    let del = document.createElement("i");
    del.classList.add("fa-solid");
    del.classList.add("fa-trash");
    li.appendChild(textNode)
    li.appendChild(del)   
    li.appendChild(mark)
    ul.appendChild(li);
    li.setAttribute("id",`li${++count}`)

    del.setAttribute("onClick","completeTodo(`${this}`)")

}


function delTodo(){
}

          
function completeTodo(e){
    
    e.target.removeElement(e.target.parentNode)
    
}
   