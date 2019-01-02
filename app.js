function onReady() {
    const toDos = [];
    const addToDoForm = document.getElementById("addToDoForm");

    function createNewToDo() {
        const newToDoText = document.getElementById("newToDoText");
        if (!newToDoText.value) {
            return;
        }
        toDos.push({
            title: newToDoText.value,
            complete: false
        });
        newToDoText.value = "";
        renderTheUI();
    }

    function renderTheUI() {
        const toDoList = document.getElementById("toDoList");
        toDoList.textContent = '';
        toDos.forEach(function (toDo) {
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            //add the toDo's title text to newLI
            newLi.textContent = toDo.title;
            //update the DOM
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
        });
    };
    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();
        createNewToDo();
    });

    renderTheUI();
}

window.onload = function () {
    onReady();
};