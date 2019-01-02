function onReady() {
    let id = 0;
    const toDos = [];
    const addToDoForm = document.getElementById("addToDoForm");

    function createNewToDo() {
        const newToDoText = document.getElementById("newToDoText");
        if (!newToDoText.value) {
            return;
        }
        toDos.push({
            title: newToDoText.value,
            complete: false,
            id: id
        });
        newToDoText.value = "";
        renderTheUI();
        id = id + 1;
    }

    function renderTheUI() {
        const toDoList = document.getElementById("toDoList");
        toDoList.textContent = '';
        toDos.forEach(function (toDo) {
            const deleteButton = document.createElement('button');
            const buttonText = document.createTextNode('Delete');
            deleteButton.appendChild(buttonText);
            deleteButton.addEventListener('click', () => {
                toDos = toDos.filter(function(item){
                    return item.id !== toDo.id;
                })
                renderTheUI();
            });
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            newLi.className = "task";
            checkbox.type = "checkbox";
            //add the toDo's title text to newLi
            newLi.textContent = toDo.title;
            //update the DOM
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(deleteButton);      
        });
    };

     addToDoForm.addEventListener('submit', () => {
        event.preventDefault( );
        createNewToDo();
    });

        renderTheUI();
}

window.onload = function () {
    onReady();
};