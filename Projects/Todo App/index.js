// let text = document.getElementById("task")
// let btn = document.getElementById("btn")
// let ul = document.getElementById("ul")


// let del ,mark;
// function addTodo(){
//     let li = document.createElement('li');
//     li.setAttribute("class","")
//     let textNode = document.createTextNode(text.value);
//   mark= document.createElement("i");
//     mark.classList.add("fa-solid");
//     mark.classList.add("fa-check");
//     mark.addEventListener("click",completeTodo(mark))

//     del = document.createElement("i");
//     del.classList.add("fa-solid");
//     del.classList.add("fa-trash");
//     del.addEventListener("click",deleteTodo(del))

//     li.appendChild(textNode)
//     li.appendChild(mark)
//     li.appendChild(del)
//     ul.appendChild(li);

// }


// // btn.addEventListener("click",addTodo);
// function deleteTodo(btns){
    
//     btns.addEventListener("click", function (e) {
//         var parent = e.target;
//         console.log(parent);
//         ul.removeChild(parent.parentNode)
//     // parent.classList.add("task-completed"); // To slide out the task to the right
//     // Now we delete that tast which we have slided out
 
// });
// }

// function completeTodo(btns){
//     btns.addEventListener("click", function (e) {
//         var parent = e.target;
//         console.log(parent);
//         parent.parentNode.classList.add("task-completed")
//     // parent.classList.add("task-completed"); // To slide out the task to the right
//     // Now we delete that tast which we have slided out

// });
// }  
<style>
  .task-completed {
    text-decoration: line-through;
    color: gray;
  }
</style>

<script>
let text = document.getElementById("task");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");

btn.addEventListener("click", addTodo);

function addTodo() {
    if (!text.value.trim()) return; // prevent empty tasks

    let li = document.createElement('li');

    let textNode = document.createTextNode(text.value);
    li.appendChild(textNode);

    let mark = document.createElement("i");
    mark.classList.add("fa-solid", "fa-check");
    mark.style.margin = "0 10px";
    mark.style.cursor = "pointer";

    mark.addEventListener("click", function () {
        li.classList.toggle("task-completed");
    });

    let del = document.createElement("i");
    del.classList.add("fa-solid", "fa-trash");
    del.style.cursor = "pointer";

    del.addEventListener("click", function () {
        ul.removeChild(li);
    });

    li.appendChild(mark);
    li.appendChild(del);
    ul.appendChild(li);

    text.value = ""; // clear input
}
</script>
