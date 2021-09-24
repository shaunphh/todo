//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//const completedButton = document.createElement("button"); //////

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck, editData);
filterOption.addEventListener("change", filterTodo);

//filter
function filterTodo(e) {
  // console.log(todos);
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("complete-btn")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("complete-btn")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

//functions add todo
function addTodo(event) {
  event.preventDefault();
  //todo div
  if (todoInput.value != "") {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // checkbox
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn", "check-box");
    completedButton.innerHTML =
      '<span class="material-icons-sharp">check_box_outline_blank</span>';
    todoDiv.appendChild(completedButton);

    ///toggle check_box
    completedButton.addEventListener("click", () => {
      todoDiv.classList.toggle("complete-btn");
      completedButton.innerHTML = todoDiv.classList.contains("complete-btn")
        ? '<span class="material-icons-sharp check">check_box</span>'
        : '<span class="material-icons-sharp check">check_box_outline_blank</span>';
    });

    //create li
    const newTodo = document.createElement("li");
    newTodo.setAttribute("title", "Click to edit item");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //////EDIT TODO ITEM

    if (!newTodo.classList.contains("completed")) {
      newTodo.onclick = editData;
    }

    // delete
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<span class="material-icons-sharp">clear</span>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear input
    todoInput.value = "";
  }
  setTimeout(function () {
    filterTodo({
      target: {
        value: filterOption.options[filterOption.selectedIndex].value,
      },
    });
  }, 200);
}

function deleteCheck(e) {
  const item = e.target;
  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  //checkmark
  if (item.classList[0] === "complete-btn") {
    const todo = item.nextSibling;
    todo.classList.toggle("completed");
  }
  setTimeout(function () {
    filterTodo({
      target: {
        value: filterOption.options[filterOption.selectedIndex].value,
      },
    });
  }, 200);
}

///select width
const select = document.querySelector("select");

select.addEventListener("change", (event) => {
  let tempSelect = document.createElement("select"),
    tempOption = document.createElement("option");

  tempOption.textContent =
    event.target.options[event.target.selectedIndex].text;
  tempSelect.style.cssText += `
      visibility: hidden;
      position: fixed;
      `;
  tempSelect.appendChild(tempOption);
  event.target.after(tempSelect);

  const tempSelectWidth = tempSelect.getBoundingClientRect().width;
  event.target.style.width = `${tempSelectWidth + 5}px`;
  tempSelect.remove();
});

select.dispatchEvent(new Event("change"));

//////////////edit li
function editData(e) {
  const el = e.target;
  const input = document.createElement("textarea");
  input.textContent = el.textContent;
  el.replaceWith(input);
  input.maxLength = "160";
  input.rows = "1";
  //////backspace event

  input.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "Backspace" || key === "Delete") {
      console.log(key);
    }
  });

  //empty input
  const isEmpty = (str) => !str.trim().length;
  input.addEventListener("input", function () {
    if (isEmpty(this.value)) {
      console.log("NAME is (Empty)");
    } else {
      console.log(`NAME value is: ${this.value}`);
    }
  });

  /////textarea height
  const tx = document.getElementsByTagName("textarea");
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute(
      "style",
      "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
    );
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  }
  /////save input
  const save = function () {
    const previous = document.createElement(el.tagName.toLowerCase());
    previous.onclick = editData;
    previous.textContent = input.value;
    input.replaceWith(previous);
    previous.classList.add("todo-item");
    previous.setAttribute("title", "Click to edit item");
  };
  input.addEventListener("blur", save, {
    once: true,
  });
  input.focus();
  // console.log(input);
}

////if input.value === "" then delete
