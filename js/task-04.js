document.addEventListener('DOMContentLoaded', () => {
  const controls = document.getElementById('controls');
  const boxesContainer = document.getElementById('boxes');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  function createBoxes(amount)
   {
    console.log('createBoxes called')
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      size += 10;
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  controls.addEventListener('click', (event) => {
    if (event.target.dataset.create) {
      const amount = +controls.querySelector('input').value;
      createBoxes(amount);
    }

    if (event.target.dataset.destroy) {
      destroyBoxes();
    }
  });
});