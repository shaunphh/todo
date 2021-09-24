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

const heading = document.querySelector("h1");
const docName = document.querySelector("nav span");
const docEmoji = document.querySelector("nav div");
heading.addEventListener("click", editTitle);

//////////////edit heading
function editTitle(e) {
  const el = e.currentTarget;
  const input = document.createElement("textarea");
  input.textContent = el.textContent;
  el.replaceWith(input);
  input.maxLength = "60";
  input.placeholder = "Untitled";
  input.rows = "1";

  setCaretToPos(document.querySelector("textarea"), -1);

  input.onkeydown = function (event) {
    if (event.key == "Enter") {
      this.blur();
    }
  };

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

  const save = function () {
    const previous = document.createElement(el.tagName.toLowerCase());
    previous.onclick = editTitle;
    previous.textContent = input.value;
    input.replaceWith(previous);
    previous.setAttribute("title", "Name your list");

    //doc title
    if (input.value == "") {
      document.title = "Untitled";
      docName.innerHTML = "Untitled";
    } else {
      document.title = input.value;
      docName.innerHTML = input.value;
    }
  };

  input.addEventListener("blur", save, {
    once: true,
  });
  input.focus();
}

///////
// function keydown(e) {
//   if (e.keyCode === 13) {
//     document.getElementById("textarea").blur();
//   }
//   console.info(e.keyCode);
// }
// function load() {
//   document.getElementById("textarea").addEventListener("keydown", keydown);
// }
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
  docEmoji.innerHTML = selection.emoji;
  changeFavicon(selection.emoji);
});
