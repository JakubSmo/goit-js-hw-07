const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('.item');


const numberOfCategories = categoriesItems.length;
console.log(`Number of categories: ${numberOfCategories}\n`);


categoriesItems.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('li');
  const numberOfElements = elements.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfElements}\n`);
});