document.addEventListener("DOMContentLoaded", () => {
  const ingredientsList = document.getElementById("ingredients");
  const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatoes",
    "Herbs",
    "Condiments",
  ];

  ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");

    ingredientsList.appendChild(li);
  });
});
