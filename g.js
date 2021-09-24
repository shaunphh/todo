import { EmojiButton } from "https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.0/dist/index.min.js";

////emoji picker
const picker = new EmojiButton({
  theme: "dark",
  autoFocusSearch: false,
  showSearch: false,
  showRecents: false,
  showVariants: false,
  position: "bottom-start",
});

document.querySelector("h1").addEventListener("click", editTitle);

//////////////edit heading
function editTitle() {
  const el = document.querySelector("h1");
  const input = document.createElement("textarea");
  //   const att = document.createAttribute("value");
  //   att.value = el.textContent;
  //   input.setAttributeNode(att);
  //   input.setAttribute("value", el.textContent);
  el.innerText = el.replaceWith(input);

  input.maxLength = "200";
  input.placeholder = "Untitled";
  input.rows = "1";
  input.wrap = "hard";
  input.addEventListener("keydown", autosize);

  function autosize() {
    let elem = this;
    setTimeout(function () {
      elem.style.cssText = "height:auto; padding:0";
      elem.style.cssText = "height:" + elem.scrollHeight + "px";
    }, 0);
  }

  const save = function () {
    const previous = document.createElement(el.tagName.toLowerCase());

    previous.onclick = editTitle;
    // console.log(previous.onclick);
    previous.textContent = input.value;

    input.replaceWith(previous);

    previous.setAttribute("title", "Name your list");
  };

  input.addEventListener("blur", save, {
    once: true,
  });
  input.focus();
}

// document.title = heading.innerHTML;

/////////
const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", () => picker.togglePicker(trigger));

////set initial favicon
const favicon = document.querySelector("link[rel=icon]");

if (favicon) {
  const emoji = favicon.getAttribute("data-emoji");

  if (emoji) {
    const canvas = document.createElement("canvas");
    canvas.height = 64;
    canvas.width = 64;

    const ctx = canvas.getContext("2d");
    ctx.font = "64px serif";
    ctx.fillText(emoji, 0, 64);

    favicon.href = canvas.toDataURL();
  }
}

////change favicon
function changeFavicon(text) {
  const canvas = document.createElement("canvas");
  canvas.height = 64;
  canvas.width = 64;
  const ctx = canvas.getContext("2d");
  ctx.font = "64px serif";
  ctx.fillText(text, 0, 64);

  const link = document.createElement("link");
  const oldLinks = document.querySelectorAll('link[rel="shortcut icon"]');
  oldLinks.forEach((e) => e.parentNode.removeChild(e));
  link.id = "dynamic-favicon";
  link.rel = "shortcut icon";
  link.href = canvas.toDataURL();
  document.head.appendChild(link);
}

picker.on("emoji", (selection) => {
  trigger.innerHTML = selection.emoji;
  changeFavicon(selection.emoji);
});

////////

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

  if (isEmpty(this.value) && (key === "Backspace" || key === "Delete")) {
  }
  ////empty input
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
/////////////////////////

var someFunction = function (event) {
  // Do something...
};

const isEmpty = (str) => !str.trim().length;
input.addEventListener("keydown", "input", function (event) {
  const key = event.key;
  if (isEmpty(this.value) && (key === "Backspace" || key === "Delete")) {
    deleteCheck();
  }
});

////empty input

input.addEventListener("input", function () {});

if (isEmpty(this.value) && (key === "Backspace" || key === "Delete")) {
  deleteCheck();
}

["keydown", "input"].forEach(function (event) {
  input.addEventListener(event, handler);
});

["keydown", "input"].forEach(function (e) {
  if (e.keyCode === 8 && this.value == "") {
    alert("when you pressed backspace, the input was empty already");
  }
  input.addEventListener(e, deleteCheck());
});
