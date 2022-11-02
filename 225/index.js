const addForm = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const clearAll = document.querySelector(".clear");


addForm.addEventListener("submit", event => {
    event.preventDefault();
    const value = addForm.task.value.trim()

    if(value.length){
        tasks.innerHTML += `<li>
                                <span>${value}</span>
                                <i class="bi bi-trash-fill delete"></i>
                            </li>`;
        addForm.reset();
    }
});

tasks.addEventListener("click", event => {
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
    }
});


clearAll.addEventListener("click", event => {
    const taskItems = tasks.querySelectorAll("li");
    taskItems.forEach(item => {
        item.remove();
    })
});