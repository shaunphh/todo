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

//functions
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
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //////EDIT TODO ITEM

    newTodo.addEventListener("click", function () {
      {
        newTodo.onclick = editData;
      }
    });
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

  // console.log(e);
}

//filter
function filterTodo(e) {
  const todos = todoList.childNodes;
  // console.log(todos);
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
  const input = document.createElement("input");
  input.setAttribute("value", el.textContent);
  el.replaceWith(input);

  const save = function () {
    const previous = document.createElement(el.tagName.toLowerCase());
    previous.onclick = editData;
    previous.textContent = input.value;
    input.replaceWith(previous);
  };

  /**
    We're defining the callback with `once`, because we know that
    the element will be gone just after that, and we don't want 
    any callbacks leftovers take memory. 
    Next time `p` turns into `input` this single callback 
    will be applied again.
  */
  input.addEventListener("blur", save, {
    once: true,
  });
  input.focus();
}

////////////////
// newTodo.classList.contains(completed);

function editTodo() {
  if (newTodo.classList.contains(completed)) {
    alert('img-container has been clicked and body has class "example"');
  }
}

todo.classList.add("filter");
