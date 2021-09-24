//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//const completedButton = document.createElement("button"); //////

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions
function addTodo(event) {
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // checkbox
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-btn");
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

  console.log(e);
}

// if(nightText.className === "nightText nightTextNight") {
//     nightText.innerHTML = "<i class='fa fa-sun-o' aria-hidden='true'></i>";
// } else {
//     nightText.innerHTML = "<i class='fa fa-moon-o' aria-hidden='true'></i>";
// };

// document.addEventListener("DOMContentLoaded", () => {
//   const children = document.querySelectorAll("[data-editable]");

//   for (const child of children) {
//     child.querySelectorAll("div > li.todo-item").onclick = editData;
//     console.log(children);
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   // const children = document.querySelectorAll("[data-editable]");

//   for (const child of document.querySelectorAll("[data-editable] > div > li")) {
//     child.onclick = editData;
//     console.log(child);
//   }
// });

// document.addEventListener("click", function (editData) {
//   for (const child of document.querySelectorAll("[data-editable] > li")) {
//     child.onclick = editData;
//     console.log(child);
//   }
// });

// for (const child of document
//   .querySelectorAll("[data-editable] > div > li")
//   .addEventListener("click", function (editData) {
//     child.onclick = editData;
//     console.log(child);
//   }));

// const lang = document.querySelector(".lang");
// const items = lang.querySelectorAll("li");

// for (const child of document.querySelectorAll("[data-editable] > div > li")) {
//   child.onclick = editData;
//   console.log(child);
// }

// const lang = document.querySelector(".lang");
// const items = lang.querySelectorAll("li");

// const child = document.querySelector("[data-editable]");
// const children = child.querySelectorAll("li");

// console.log(children);

// for (const children of Object.entries(child)) {
//   children.querySelectorAll("li").onclick = editData;
// }
//////////////////////////////////////////////////////////////////
// for (const child of document.querySelectorAll(".todo-list")) {
//   // child.addEventListener("click", clickHandler, false);
//   child.onclick = editData;
// }
//////////////////////////////////////////////////////
// const child = todoList.querySelectorAll("li");
// console.log(child);
// child.addEventListner("click", () => {
//   child.onclick = editData;
// });

// In this example, the <ul> always exists and will
// be the common ancestor that dynamically created
// elements will have
// const list = document.querySelector(".todo-list");

// // Make some new elements upon clicking the button:
// // document.querySelector("button").addEventListener("click", function(){
// //   const bullet = document.createElement("li");
// //   bullet.textContent = "Dynamically Created Element (click me)";
// //   bullet.classList.add("bullet");
// //   list.appendChild(bullet);
// // });

// list.addEventListener("click", function (event) {
//   // All DOM event handlers are automatically
//   // passed a reference to the event object that
//   // they are responding to. That object provides
//   // a .target property that references the element
//   // that triggered the event

//   // Determine the source of the event
//   if (event.target.classList.contains("todo-item")) {
//     list.onclick = editData;
//   }
// });

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

////////

// const favicon = document.querySelector("link[rel=icon]");

// if (favicon) {
//   const emoji = favicon.getAttribute("data-emoji");

//   if (emoji) {
//     const canvas = document.createElement("canvas");
//     canvas.height = 64;
//     canvas.width = 64;

//     const ctx = canvas.getContext("2d");
//     ctx.font = "64px serif";
//     ctx.fillText(emoji, 0, 64);

//     favicon.href = canvas.toDataURL();
//   }
// }

// showCategoryButtons: false,
// showSearch: false,
// showPreview: false,
// showRecents: false

const button = document.querySelector("#emoji-button");

const picker = new EmojiButton({});

picker.on("emoji", (emoji) => {
  document.querySelector("#input").value = emoji;
});
button.addEventListener("click", () => {
  picker.togglePicker(button);
});

/*!
 * Dynamically changing favicons with JavaScript
 * Works in all A-grade browsers except Safari and Internet Explorer
 * Demo: http://mathiasbynens.be/demo/dynamic-favicons
 */

// HTML5™, baby! http://mathiasbynens.be/notes/document-head
// document.head = document.head || document.getElementsByTagName("head")[0];

//////////////////
// var url = "YourURLHere";
// function changeIcon() {
//   document.getElementById("icon").href = url;
// }

// const url = "YourURLHere";
// function changeIcon() {
//   document.getElementById("icon").href = url;
// }

// function changeFavicon(src) {
//   const link = document.createElement("link"),
//     oldLink = document.getElementById("dynamic-favicon");
//   link.id = "dynamic-favicon";
//   link.rel = "shortcut icon";
//   link.href = src;
//   if (oldLink) {
//     document.head.removeChild(oldLink);
//   }
//   document.head.appendChild(link);
// }

// const btn = document.getElementsByTagName("button")[0];
// btn.onclick = function () {
//   changeFavicon("http://www.google.com/favicon.ico");
// };

// const faviMoji = favicon.getAttribute("data-emoji");
// console.log(faviMoji);

// const myMoji = (document.querySelector("input#input").placeholder = faviMoji);
// console.log(myMoji);

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

const btn = document.getElementsByTagName("button")[0];
btn.onclick = function () {
  changeFavicon("❤️");
};

////

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

// showCategoryButtons: false,
// showSearch: false,
// showPreview: false,
// showRecents: false

const button = document.querySelector("#emoji-button");

const picker = new EmojiButton({});

picker.on("emoji", (emoji) => {
  document.querySelector("#input").value = emoji;
});
button.addEventListener("click", () => {
  picker.togglePicker(button);
});

/*!
 * Dynamically changing favicons with JavaScript
 * Works in all A-grade browsers except Safari and Internet Explorer
 * Demo: http://mathiasbynens.be/demo/dynamic-favicons
 */

// HTML5™, baby! http://mathiasbynens.be/notes/document-head
// document.head = document.head || document.getElementsByTagName("head")[0];

//////////////////
// var url = "YourURLHere";
// function changeIcon() {
//   document.getElementById("icon").href = url;
// }

// const url = "YourURLHere";
// function changeIcon() {
//   document.getElementById("icon").href = url;
// }

// function changeFavicon(src) {
//   const link = document.createElement("link"),
//     oldLink = document.getElementById("dynamic-favicon");
//   link.id = "dynamic-favicon";
//   link.rel = "shortcut icon";
//   link.href = src;
//   if (oldLink) {
//     document.head.removeChild(oldLink);
//   }
//   document.head.appendChild(link);
// }

// const btn = document.getElementsByTagName("button")[0];
// btn.onclick = function () {
//   changeFavicon("http://www.google.com/favicon.ico");
// };

// const faviMoji = favicon.getAttribute("data-emoji");
// console.log(faviMoji);

// const myMoji = (document.querySelector("input#input").placeholder = faviMoji);
// console.log(myMoji);

// const myEmoji = JSON.parse(document.getElementById("input#input"));

let inputEvent = new Event("input", { bubbles: true, cancelable: true });

const myEmoji = document.getElementById("input").value;
console.log(myEmoji);

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

const btn = document.getElementsByTagName("button")[0];
btn.onclick = function () {
  changeFavicon(myEmoji);
};

/////
import { EmojiButton } from "https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.0/dist/index.min.js";

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

////emoji picker
const picker = new EmojiButton({
  theme: "dark",
  autoFocusSearch: false,
  showSearch: false,
  showRecents: false,
  showVariants: false,
});

const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", () => picker.togglePicker(trigger));

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

// picker.on("emoji", (selection) => {
//   trigger.onclick = function () {
//     trigger.innerHTML = selection.emoji;
//   };
// });

// changeFavicon(trigger.innerHTML);

picker.on("emoji", (selection) => {
  trigger.addEventListener("click", function () {
    trigger.innerHTML = selection.emoji;
    changeFavicon(selection.emoji);
  });
});

// trigger.onclick = function () {
//   changeFavicon(trigger.innerHTML);
// };

// picker.on("emoji", (selection) => {
//   trigger.innerHTML = selection.emoji;
// });
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
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

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
    previous.classList.add("todo-item");
  };
  input.addEventListener("blur", save, {
    once: true,
  });
  input.focus();
}
////////
todoList.addEventListener("click", function (event) {
  const todoBoy = event.target;
  if (event.target.className == "todo-item") {
    todoBoy.onclick = editData;
  }
});

//////
todoList.addEventListener("click", function (event) {
  const todoMan = event.target;
  if (event.target.className == "todo") {
    todo.onclick = filterTodo;
    console.log("hit");
  }
});

/////

function callback(mutationsList, observer) {
  console.log("Mutations:", mutationsList);
  console.log("Observer:", observer);
  mutationsList.forEach((mutation) => {
    if (mutation.attributeName === "class") {
      alert("change");
    }
  });
}
mutationObserver.observe(todo, { attributes: true });
const mutationObserver = new MutationObserver(callback);
///////////////

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
    previous.classList.add("todo-item");
  };
  input.addEventListener("blur", save, {
    once: true,
  });
  input.focus();
}
//////
// todoList.addEventListener("click", function (event) {
//   if (event.target.className == "todo") {
//     console.log("hi");
//   }
// });
//////////////

////

// const mainNode = document.querySelector(".todo-item");

// const todos = todoList.childNodes;
// console.log(todos);

// function callback(mutationsList, observer) {
//   console.log("Mutations:", mutationsList);
//   console.log("Observer:", observer);
//   mutationsList.forEach((mutation) => {
//     if (mutation.attributeName === "class") {
//       alert("change");
//     }
//   });
// }

// const mutationObserver = new MutationObserver(callback);

// mutationObserver.observe(todos, { attributes: true });

// Click handler for entire DIV container

// todoContainer =
// todoList.addEventListener("click", function (e) {
//   // But only alert for elements that have an alert-button class
//   if (e.target.className == "complete-btn") {
//     alert(e.target.innerHTML);
//   }
// });

// const todoBoy = todoList.childNodes;
// console.log(todoBoy);
// todoBoy.addEventListener("click", filterTodo);
// const mutationObserver = new MutationObserver(callback);
// function addObserverIfDesiredNodeAvailable() {
//   var composeBox = document.querySelectorAll(".todo");
//   if (!composeBox) {
//     //The node we need does not exist yet.
//     //Wait 500ms and try again
//     window.setTimeout(addObserverIfDesiredNodeAvailable, 500);
//     return;
//   }
//   var config = { childList: true };
//   mutationObserver.observe(composeBox, config);
// }
// addObserverIfDesiredNodeAvailable();

// const mutationObserver = new MutationObserver(callback);
// function callback(mutationsList, observer) {
//   var composeBox = document.querySelectorAll(".todo");
//   console.log("Mutations:", mutationsList);
//   console.log("Observer:", observer);
//   mutationsList.forEach((mutation) => {
//     if (!composeBox) {
//       //The node we need does not exist yet.
//       //Wait 500ms and try again
//       window.setTimeout(addObserverIfDesiredNodeAvailable, 500);
//       return;
//     }
//   });
// }
// mutationObserver.observe(composeBox, { attributes: true });

// new MutationObserver(function (mutations, observer) {
//   // Do something here
//   console.log(observer);
//   // Stop observing if needed:
//   observer.disconnect();
// }).observe(document.querySelector("ul.todo-list"), { childList: true });

// function waitForElm(selector) {
//   return new Promise((resolve) => {
//     if (document.querySelector(selector)) {
//       return resolve(document.querySelector(selector));
//     }

//     const observer = new MutationObserver((mutations) => {
//       if (document.querySelector(selector)) {
//         resolve(document.querySelector(selector));
//         observer.disconnect();
//       }
//     });

//     observer.observe(todoList, {
//       childList: true,
//       subtree: true,
//     });
//   });
// }

function waitForElement(selector, delay = 1000, tries = 10) {
  const element = document.querySelector(selector);

  // creates a local variable w/ the name of the selector to keep track of all tries
  if (!window[`__${selector}`]) {
    window[`__${selector}`] = 0;
  }

  function _search() {
    return new Promise((resolve) => {
      window[`__${selector}`]++;
      // console.log(window[`__${selector}`]);
      setTimeout(resolve, delay);
    });
  }

  //element not found, retry
  if (element === null) {
    if (window[`__${selector}`] >= tries) {
      window[`__${selector}`] = 0;
      return Promise.reject(null);
    }

    return _search().then(() => waitForElement(selector));
  } else {
    return Promise.resolve(element);
  }
}

async function wait() {
  try {
    const $el = await waitForElement(".todo");
    console.log($el);
  } catch (err) {
    console.error("Timeout - couldn't find element.");
  }
}

wait();

function callback(mutationsList, observer) {
  console.log("Mutations:", mutationsList);
  console.log("Observer:", observer);
  mutationsList.forEach((mutation) => {
    if (mutation.attributeName === "class") {
      alert("change");
    }
  });
}
mutationObserver.observe(element, { attributes: true });
const mutationObserver = new MutationObserver(callback);

const MutationObserver =
  window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver;
const config = { attributes: true };
const callback = function (mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (let mutation of mutationsList) {
    if (mutation.attributeName === "class") {
      if (mutation.target.className.includes("active")) {
        myFunction(); // Or you can put function code here.
      }
    }
  }
};

const MutationObserver =
  window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver;
const config = { attributes: true };
const callback = function (mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (let mutation of mutationsList) {
    if (mutation.attributeName === "class") {
      if (mutation.target.className.includes("complete-btn")) {
        filterTodo(); // Or you can put function code here.
      }
    }
  }
};

//Set the target node you want to observe
const targetNode = document.getElementById("myDIV");

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
///////////

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
  filterTodo({
    target: {
      value: filterOption.options[filterOption.selectedIndex].value,
    },
  });
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

  filterTodo({
    target: {
      value: filterOption.options[filterOption.selectedIndex].value,
    },
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
    previous.classList.add("todo-item");
  };
  input.addEventListener("blur", save, {
    once: true,
  });
  input.focus();
}
//////
// todoList.addEventListener("click", function (event) {
//   if (event.target.className == "todo") {
//     console.log("hi");
//   }
// });
//////////////

////

// const mainNode = document.querySelector(".todo-item");

// const todos = todoList.childNodes;
// console.log(todos);

// function callback(mutationsList, observer) {
//   console.log("Mutations:", mutationsList);
//   console.log("Observer:", observer);
//   mutationsList.forEach((mutation) => {
//     if (mutation.attributeName === "class") {
//       alert("change");
//     }
//   });
// }

// const mutationObserver = new MutationObserver(callback);

// mutationObserver.observe(todos, { attributes: true });

// Click handler for entire DIV container

// todoContainer =
// todoList.addEventListener("click", function (e) {
//   // But only alert for elements that have an alert-button class
//   if (e.target.className == "complete-btn") {
//     alert(e.target.innerHTML);
//   }
// });

// const todoBoy = todoList.childNodes;
// console.log(todoBoy);
// todoBoy.addEventListener("click", filterTodo);
// const mutationObserver = new MutationObserver(callback);
// function addObserverIfDesiredNodeAvailable() {
//   var composeBox = document.querySelectorAll(".todo");
//   if (!composeBox) {
//     //The node we need does not exist yet.
//     //Wait 500ms and try again
//     window.setTimeout(addObserverIfDesiredNodeAvailable, 500);
//     return;
//   }
//   var config = { childList: true };
//   mutationObserver.observe(composeBox, config);
// }
// addObserverIfDesiredNodeAvailable();

// const mutationObserver = new MutationObserver(callback);
// function callback(mutationsList, observer) {
//   var composeBox = document.querySelectorAll(".todo");
//   console.log("Mutations:", mutationsList);
//   console.log("Observer:", observer);
//   mutationsList.forEach((mutation) => {
//     if (!composeBox) {
//       //The node we need does not exist yet.
//       //Wait 500ms and try again
//       window.setTimeout(addObserverIfDesiredNodeAvailable, 500);
//       return;
//     }
//   });
// }
// mutationObserver.observe(composeBox, { attributes: true });

// new MutationObserver(function (mutations, observer) {
//   // Do something here
//   console.log(observer);
//   // Stop observing if needed:
//   observer.disconnect();
// }).observe(document.querySelector("ul.todo-list"), { childList: true });

// function waitForElm(selector) {
//   return new Promise((resolve) => {
//     if (document.querySelector(selector)) {
//       return resolve(document.querySelector(selector));
//     }

//     const observer = new MutationObserver((mutations) => {
//       if (document.querySelector(selector)) {
//         resolve(document.querySelector(selector));
//         observer.disconnect();
//       }
//     });

//     observer.observe(todoList, {
//       childList: true,
//       subtree: true,
//     });
//   });
// }
////////////
// function waitForElement(selector, delay = 1000, tries = 10) {
//   const element = document.querySelector(selector);

//   // creates a local variable w/ the name of the selector to keep track of all tries
//   if (!window[`__${selector}`]) {
//     window[`__${selector}`] = 0;
//   }

//   function _search() {
//     return new Promise((resolve) => {
//       window[`__${selector}`]++;
//       // console.log(window[`__${selector}`]);
//       setTimeout(resolve, delay);
//     });
//   }

//   //element not found, retry
//   if (element === null) {
//     if (window[`__${selector}`] >= tries) {
//       window[`__${selector}`] = 0;
//       return Promise.reject(null);
//     }

//     return _search().then(() => waitForElement(selector));
//   } else {
//     return Promise.resolve(element);
//   }
// }

// async function wait() {
//   try {
//     const $el = await waitForElement(".complete-btn");
//     console.log($el);
//     $el.addEventListener("click", function () {
//       alert("hello");
//       filterTodo();
//     });
//   } catch (err) {
//     console.error("Timeout - couldn't find element.");
//   }
// }

// wait();

// function callback(mutationsList, observer) {
//   console.log("Mutations:", mutationsList);
//   console.log("Observer:", observer);
//   mutationsList.forEach((mutation) => {
//     if (mutation.attributeName === "class") {
//       alert("change");
//     }
//   });
// }
////////////////
// const MutationObserver =
//   window.MutationObserver ||
//   window.WebKitMutationObserver ||
//   window.MozMutationObserver;
// const config = { attributes: true };
// const callbacka = function (mutationsList, observer) {
//   // Use traditional 'for loops' for IE 11
//   for (let mutation of mutationsList) {
//     if (mutation.attributeName === "class") {
//       if (mutation.target.className.includes("complete-btn")) {
//         filterTodo(); // Or you can put function code here.
//       }
//     }
//   }
// };

// //Set the target node you want to observe
// const targetNode = wait();

// // Create an observer instance linked to the callbacka function
// const observer = new MutationObserver(callbacka);

// // Start observing the target node for configured mutations
// observer.observe(targetNode, config);

<input
  type="text"
  value="Enter Your Phone Number"
  class="form"
  onblur="if(this.value=='')this.value='Enter Your Phone Number';"
  onfocus="if(this.value=='Enter Your Phone Numberl')this.value='';"
/>;





////////////////

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
/////
function editTitle(e) {
  const el = e.target;
  const input = document.createElement("textarea");
  const att = document.createAttribute("value");
  att.value = el.textContent;
  input.setAttributeNode(att);
  input.setAttribute("value", el.textContent);
  el.replaceWith(input);




document.querySelector("h1").addEventListener("click", editTitle);

//////////////edit heading
function editTitle() {
  const el = document.querySelector("h1");
  const text = el.textContent;
  const input = document.createElement("textarea");
  input.textContent = text;
  el.replaceWith(input);

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


const isEmpty = (str) => !str.trim().length;
const key = e.key;

["keydown", "input"].forEach(function (event) {
  input.addEventListener(event, handler);
  if (isEmpty(this.value) && (key === "Backspace" || key === "Delete")) {
    deleteCheck();
  }
});


["keydown", "input"].forEach(function (event) {
  const key = e.key;
  const isEmpty = (str) => !str.trim().length;
  if (isEmpty(this.value) && (key === "Backspace" || key === "Delete")) {
    input.addEventListener(event, deleteCheck());
  }
});


$("input").on('keydown', function(ev) {
  if (ev.which === 8 && this.value == '') {
    alert('when you pressed backspace, the input was empty already');
  }
});



["keydown", "input"].forEach(function (e) {
  if (e.keyCode === 8 && this.value == '') {
    alert('when you pressed backspace, the input was empty already');
  }
});