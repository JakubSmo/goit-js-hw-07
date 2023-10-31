const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBox(size) {
  const box = document.createElement('div');
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}


function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = createBox(size);
    fragment.appendChild(box);
    size += 10;
  }
  boxesContainer.appendChild(fragment);
}


function destroyBoxes() {
  boxesContainer.innerHTML = '';
}


createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount > 0) {
    createBoxes(amount);
  }
});

destroyButton.addEventListener('click', destroyBoxes);