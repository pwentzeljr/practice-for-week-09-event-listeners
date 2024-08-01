// Your code here
document.addEventListener('DOMContentLoaded', event => {
  alert('DOM has loaded.');

  const listeners = [
    { id: 'red-input', args: ['input', inputBackgroundRed, false]},
    { id: 'add-item', args: ['click', addListItem, false]},
    { id: 'color-select', args: ['change', colorPickerChange, false]},
    { id: 'hover-div', args: ['mouseover', changeTextOnHover, false]},
    { id: 'hover-div', args: ['mouseleave', revertTextOnLeave, false]},
  ];

  addListeners(listeners);

  const removeListenerButton = document.getElementById('remove-listeners');
  removeListenerButton.addEventListener('click', event => {
    if (removeListenerButton.innerText === "Remove Listeners") {
      removeListeners(listeners);
      removeListenerButton.innerText = "Add Listeners";
    } else if (removeListenerButton.innerText === "Add Listeners") {
      addListeners(listeners);
      removeListenerButton.innerText = "Remove Listeners";
    }
  });
});

const inputBackgroundRed = event => {
  const re = /\bred\b/gmi;
    if (re.test(event.target.value)) {
      event.target.style.backgroundColor = "red";
    } else {
      event.target.style.backgroundColor = null;
    }
}

const addListItem = event => {
  const listAddInput = document.getElementById("list-add");
  const unorderdList = document.querySelector("section#section-2 ul");

  let el = document.createElement('li');
  el.innerText = listAddInput.value.trim();
  unorderdList.appendChild(el);

  listAddInput.value = null;
}

const colorPickerChange = event => {
  const section3 = document.getElementById('section-3');
  section3.style.backgroundColor = event.target.value;
}

const changeTextOnHover = event => {
  const hoverDivPara = document.querySelector("div#hover-div p");
  hoverDivPara.innerText = "You're hovering."
}

const revertTextOnLeave = event => {
  const hoverDivPara = document.querySelector("div#hover-div p");
  hoverDivPara.innerText = "Hover here."
}

const alertOnSpace = event => {
  if (event.code === 'Space') {
    alert('HOW DARE YOU HIT THE SPACEBAR!');
  }
}

const removeListeners = listeners => {
  for (const listener of listeners) {
    const element = document.getElementById(listener.id);
    element.removeEventListener(...listener.args);
  }

  window.removeEventListener('keydown', alertOnSpace, false);
}

const addListeners = listeners => {
  for (const listener of listeners) {
    const element = document.getElementById(listener.id);
    element.addEventListener(...listener.args);
  }

  window.addEventListener('keydown', alertOnSpace, false);
}
