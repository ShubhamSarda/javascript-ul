const addForm = document.querySelector(".add");
const tasks = document.querySelector(".tasks");

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
})