import { getRandomHexColor } from "./common";

function createBoxes(amount) {
  const boxes = document.getElementById("boxes");
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = "30px";
    box.style.height = 30 + i * 10 + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  const boxes = document.getElementById("boxes");
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

document.querySelector("button[data-create]").addEventListener("click", () => {
  const amount = Number(document.querySelector("input").value);
  createBoxes(amount);
});

document.querySelector("button[data-destroy]").addEventListener("click", destroyBoxes);