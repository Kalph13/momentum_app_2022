const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const toDoSummit = (event) => {
    event.preventDefault();
    const newToDo = { key: Date.now(), value: toDoInput.value };
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDo(toDos);
    toDoInput.value = "";
};

const paintToDo = (newToDo) => {
    const span = document.createElement("span");
    span.innerHTML = newToDo.value;
    
    const button = document.createElement("span");
    button.innerText = "×";
    button.addEventListener("click", removeToDo);
    
    const li = document.createElement("li");
    li.id = newToDo.key;

    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
}

const removeToDo = (event) => {
    /* Case 1: Array Used (Not Object) → Remove Multiple Elements When Their Values are Same */
    /* toDos = toDos.filter((element) => element !== event.target.parentNode.firstChild.innerText);
    toDoList.removeChild(event.target.parentNode); */
    
    /*Case 2: Object Used → Remove One, Unique Element based on Key Value */
    toDos = toDos.filter((node) => node.key != event.target.parentNode.id);
    toDoList.removeChild(event.target.parentNode);

    saveToDo(toDos);
}

const saveToDo = (toDos) => {
    /* Option 1: Saved as Text → Use Split */
    /* localStorage.setItem("savedToDo", toDos); */
    
    /* Option 2: Saved as Array or Object → Use Parse */
    localStorage.setItem("savedToDo", JSON.stringify(toDos)); 
}

const loadToDo = () => {
    /* Option 1: Saved as Text → Use Split */
    /* const savedToDo = localStorage.getItem("savedToDo").split(","); */ 
    
    /* Option 2: Saved as Array or Object → Use Parse */
    const savedToDo = JSON.parse(localStorage.getItem("savedToDo")); 
    
    /* Option 1: Use forEach */
    if(savedToDo) {
        toDos = savedToDo;
        toDos.forEach((toDo) => paintToDo(toDo)); 
     } 
    
     /* Option 2: Use for, Array Used (Not Object) */
     /* for (let i = 0; i < toDos.length; i++) paintToDo(toDos[i]); */
}

loadToDo();
toDoForm.addEventListener("submit", toDoSummit);