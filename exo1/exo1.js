document.querySelector(".form_task").onsubmit = function(e) {
    e.preventDefault();
    var value = document.querySelector(".new_liste").value;
    if (value) {
        addTask(value);
        document.querySelector(".new_liste").value = '';
    }
};

document.querySelector(".supprimer").onclick = function() {
    var checkboxes = document.querySelectorAll(".checkbox");
    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];
        if (checkbox.checked) {
            checkbox.parentElement.remove();
        }
    }
};


function addTask(text) {
    var list = document.querySelector(".la_liste");

    var item = document.createElement("li");

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "checkbox";
    checkBox.onchange = function() {
        taskText.style.textDecoration = this.checked ? "line-through" : "none";
    };
    item.appendChild(checkBox);

    var taskText = document.createElement("span");
    taskText.innerText = text;
    item.appendChild(taskText);

    var deleteButton = document.createElement("span");
    deleteButton.innerText = "x";
    deleteButton.className = "suppr_button";
    deleteButton.onclick = function() {
        list.removeChild(item);
    };
    item.appendChild(deleteButton);

    list.appendChild(item);
}