function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();
        //get the text from form
        let title = newToDoText.value;
        //create a new li
        let newLi = document.createElement('li');
        //create a new input
        let checkbox = document.createElement('input');
        //set the input's type to checkbox
        checkbox.type = 'checkbox';
        //set the checkbox's class
        checkbox.className = 'chk';
        //set the title
        newLi.textContent = title;
        //attach the checkbox to the li
        newLi.appendChild(checkbox);
        //attach the li to the ul
        toDoList.appendChild(newLi);
        //set li's class
        newLi.className = 'txt .mdl-list__item'
        //empty the input field
        newToDoText.value = "";
    })
const deleteTask = document.getElementById('deleteTask');
        deleteTask.addEventListener('click', () => {
        let boxes = document.getElementsByClassName('chk');
        let texts = document.getElementsByClassName('txt');
        for (var i = 0; i < boxes.length; i++) {
            box = boxes[i];
            txt = texts[i]
            if (box.checked) {
                box.parentNode.removeChild(box);
                txt.parentNode.removeChild(txt);
            }
        }
    })
}

       
window.onload = function () {
    onReady();
}


