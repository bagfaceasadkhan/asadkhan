//FETCHING ELEMENTS
const output = document.querySelector(".output");
const input = document.querySelector(".input");
const banner = document.querySelector(".banner");
const infoSpan = document.querySelector(".info-span");
//VARIABLES
let history = [];
//LOGIC
input.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    let result = checkInput(input.value.toLowerCase());
    printCommand(input.value);
    loopCommand(result);
    input.value = "";
  }
});
//FUNCTIONS
function checkInput(cmd) {
  switch (cmd) {
    case "help":
      history.push("help");
      return help;
    case "whois":
      history.push("whois");
      return whois;
    case "clear":
      clearTerminal();
      history = [];
      break;
    case "social":
      history.push("social");
      return social;
    case "whoami":
      history.push("whoami");
      return whoami;
    case "email":
      history.push("email");
      addLine(
        '<span class="command">Opening mailto:<span/><a href="mailto:asadkhan2001.pathan@gmail.com">  asadkhan2001.pathan@gmail.com</a>...'
      );
      newTab(email);
      break;
    case "banner":
      history.push("banner");
      displayBanner();
      break;
    case "projects":
      history.push("projects");
      return projectArr;
    case "cv":
      history.push("cv");
      return cv;
    case "contact":
      history.push("contact");
      return contact;
    case "history":
      return history;

    default:
      displayError();
      break;
  }
}

function displayBanner() {
  const tempBan = document.createElement("div");
  tempBan.innerHTML = banner.innerHTML;
  output.insertAdjacentElement("beforeend", tempBan);
  input.value = "";
  window.scrollTo(0, document.body.offsetHeight);
}

function clearTerminal() {
  output.innerHTML = "";
  input.value = "";
}

function newTab(link) {
  input.value = "";
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function displayError() {
  var next = document.createElement("p");
  (next.innerHTML =
    '<span class="error">Command not found. For a list of commands, type <span class="command">\'help\'</span></span>'),
    "error",
    100;
  input.value = "";

  output.insertAdjacentElement("beforeend", next);
  window.scrollTo(0, document.body.offsetHeight);
}

function printCommand(inputvalue) {
  var next = document.createElement("p");
  next.innerHTML = inputvalue;

  output.insertAdjacentElement("beforeend", next);
}

function addLine(text) {
  var t = "";

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }

  var next = document.createElement("p");
  next.innerHTML = t;

  output.insertAdjacentElement("beforeend", next);

  window.scrollTo(0, document.body.offsetHeight);
}
function loopCommand(cmd, inputvalue) {
  cmd.forEach((val) => {
    addLine(val, inputvalue);
  });
}

function printLetterByLetter(message) {
  var i = 0;
  var interval = setInterval(function () {
    infoSpan.innerHTML += message.charAt(i);
    i++;
    if (i > message.length) {
      clearInterval(interval);
    }
  }, 40);
}

printLetterByLetter(
  "Welcome to interactive web terminal. Type 'help' to get the listof commands to get started."
);
