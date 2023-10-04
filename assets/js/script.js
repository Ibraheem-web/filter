// ID's REFRENCES FROM HTML
const button = document.getElementById('menu-button');
const button1 = document.getElementById('menu-button-1');
const topBtn = document.getElementById('top-dd-btn');
const menu = document.getElementById('dropdown-menu');
const menu1 = document.getElementById('dropdown-menu-1');
const topMenu = document.getElementById('top-dropdown');
const keywordInput = document.getElementById('keyword-input');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const clearAll = document.getElementById('clear-all');
const fromSlider2 = document.querySelector('#fromSlider2');
const toSlider2 = document.querySelector('#toSlider2');
const fromInput2 = document.querySelector('#fromInput2');
const toInput2 = document.querySelector('#toInput2');
const fromSlider3 = document.querySelector('#fromSlider3');
const toSlider3 = document.querySelector('#toSlider3');
const fromInput3 = document.querySelector('#fromInput3');
const toInput3 = document.querySelector('#toInput3');
const fromSlider4 = document.querySelector('#fromSlider4');
const toSlider4 = document.querySelector('#toSlider4');
const fromInput4 = document.querySelector('#fromInput4');
const toInput4 = document.querySelector('#toInput4');

fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
setToggleAccessible(toSlider);

fillSlider(fromSlider2, toSlider2, '#C6C6C6', '#25daa5', toSlider2);
setToggleAccessible(toSlider2);

fillSlider(fromSlider3, toSlider3, '#C6C6C6', '#25daa5', toSlider3);
setToggleAccessible(toSlider3);

fillSlider(fromSlider4, toSlider4, '#C6C6C6', '#25daa5', toSlider4);
setToggleAccessible(toSlider4);

// DROPDOWN MENY FUNCTIONALITY

// FRIST MENU
button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.add('hidden');
  }
});

menu.addEventListener('click', (event) => {
  event.stopPropagation();
});

// SECOND MENU
button1.addEventListener('click', () => {
  menu1.classList.toggle('hidden');
});

document.addEventListener('click', (even) => {
  if (!menu1.contains(even.target) && !button1.contains(even.target)) {
    menu1.classList.add('hidden');
  }
});

menu1.addEventListener('click', (even) => {
  even.stopPropagation();
});

// THIRD MENU
topBtn.addEventListener('click', () => {
  topMenu.classList.toggle('hidden');
});

document.addEventListener('click', (eve) => {
  if (!topMenu.contains(eve.target) && !topBtn.contains(eve.target)) {
    topMenu.classList.add('hidden');
  }
});

topMenu.addEventListener('click', (eve) => {
  eve.stopPropagation();
});

// FILTER CLEAR FUNCTIONALITY
clearAll.addEventListener('click', () => {
  keywordInput.value = '';

  menu.value = '';

  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  })
})

// MULTIRANGE SLIDER 

function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromSlider.value = from;
  }
}

function controlToInput(toSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
  setToggleAccessible(toInput);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
  }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max - to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromSlider.value = from;
  }
}

function controlToInput(toSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
  setToggleAccessible(toInput);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
  }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max - to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%,
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%,
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider2 = document.querySelector('#toSlider2');
  if (Number(currentTarget.value) <= 0) {
    toSlider2.style.zIndex = 2;
  } else {
    toSlider2.style.zIndex = 0;
  }
}

fromSlider2.oninput = () => controlFromSlider(fromSlider2, toSlider2, fromInput2);
toSlider2.oninput = () => controlToSlider(fromSlider2, toSlider2, toInput2);
fromInput2.oninput = () => controlFromInput(fromSlider2, fromInput2, toInput2, toSlider2);
toInput2.oninput = () => controlToInput(toSlider2, fromInput2, toInput2, toSlider2);

function controlFromInput3(fromSlider3, fromInput3, toInput3, controlSlider3) {
  const [from, to] = getParsed(fromInput3, toInput3);
  fillSlider(fromInput3, toInput3, '#C6C6C6', '#25daa5', controlSlider3);
  if (from > to) {
    fromSlider3.value = to;
    fromInput3.value = to;
  } else {
    fromSlider3.value = from;
  }
}

function controlToInput3(toSlider3, fromInput3, toInput3, controlSlider3) {
  const [from, to] = getParsed(fromInput3, toInput3);
  fillSlider(fromInput3, toInput3, '#C6C6C6', '#25daa5', controlSlider3);
  setToggleAccessible(toInput3);
  if (from <= to) {
    toSlider3.value = to;
    toInput3.value = to;
  } else {
    toInput3.value = from;
  }
}

function controlFromSlider3(fromSlider3, toSlider3, fromInput3) {
  const [from, to] = getParsed(fromSlider3, toSlider3);
  fillSlider(fromSlider3, toSlider3, '#C6C6C6', '#25daa5', toSlider3);
  if (from > to) {
    fromSlider3.value = to;
    fromInput3.value = to;
  } else {
    fromInput3.value = from;
  }
}

function controlToSlider3(fromSlider3, toSlider3, toInput3) {
  const [from, to] = getParsed(fromSlider3, toSlider3);
  fillSlider(fromSlider3, toSlider3, '#C6C6C6', '#25daa5', toSlider3);
  setToggleAccessible(toSlider3);
  if (from <= to) {
    toSlider3.value = to;
    toInput3.value = to;
  } else {
    toInput3.value = from;
    toSlider3.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max - to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%,
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%,
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider3 = document.querySelector('#toSlider3');
  if (Number(currentTarget.value) <= 0) {
    toSlider3.style.zIndex = 2;
  } else {
    toSlider3.style.zIndex = 0;
  }
}

fromSlider3.oninput = () => controlFromSlider3(fromSlider3, toSlider3, fromInput3);
toSlider3.oninput = () => controlToSlider3(fromSlider3, toSlider3, toInput3);
fromInput3.oninput = () => controlFromInput3(fromSlider3, fromInput3, toInput3, toSlider3);
toInput3.oninput = () => controlToInput3(toSlider3, fromInput3, toInput3, toSlider3);

function controlFromInput4(fromSlider4, fromInput4, toInput4, controlSlider4) {
  const [from, to] = getParsed(fromInput4, toInput4);
  fillSlider(fromInput4, toInput4, '#C6C6C6', '#25daa5', controlSlider4);
  if (from > to) {
    fromSlider4.value = to;
    fromInput4.value = to;
  } else {
    fromSlider4.value = from;
  }
}

function controlToInput4(toSlider4, fromInput4, toInput4, controlSlider4) {
  const [from, to] = getParsed(fromInput4, toInput4);
  fillSlider(fromInput4, toInput4, '#C6C6C6', '#25daa5', controlSlider4);
  setToggleAccessible(toInput4);
  if (from <= to) {
    toSlider4.value = to;
    toInput4.value = to;
  } else {
    toInput4.value = from;
  }
}

function controlFromSlider4(fromSlider4, toSlider4, fromInput4) {
  const [from, to] = getParsed(fromSlider4, toSlider4);
  fillSlider(fromSlider4, toSlider4, '#C6C6C6', '#25daa5', toSlider4);
  if (from > to) {
    fromSlider4.value = to;
    fromInput4.value = to;
  } else {
    fromInput4.value = from;
  }
}

function controlToSlider4(fromSlider4, toSlider4, toInput4) {
  const [from, to] = getParsed(fromSlider4, toSlider4);
  fillSlider(fromSlider4, toSlider4, '#C6C6C6', '#25daa5', toSlider4);
  setToggleAccessible(toSlider4);
  if (from <= to) {
    toSlider4.value = to;
    toInput4.value = to;
  } else {
    toInput4.value = from;
    toSlider4.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max - to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%,
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%,
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider4 = document.querySelector('#toSlider4');
  if (Number(currentTarget.value) <= 0) {
    toSlider4.style.zIndex = 2;
  } else {
    toSlider4.style.zIndex = 0;
  }
}

fromSlider4.oninput = () => controlFromSlider4(fromSlider4, toSlider4, fromInput4);
toSlider4.oninput = () => controlToSlider4(fromSlider4, toSlider4, toInput4);
fromInput4.oninput = () => controlFromInput4(fromSlider4, fromInput4, toInput4, toSlider4);
toInput4.oninput = () => controlToInput4(toSlider4, fromInput4, toInput4, toSlider4);