// main.js
import recipes from './recipes.mjs';

// 01. Random helpers
function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  return list[random(list.length)];
}

// 02. Template functions
function tagsTemplate(tags) {
  return `<ul class="recipe__tags">
    ${tags.map(tag => `<li>${tag}</li>`).join('')}
  </ul>`;
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="Image of ${recipe.name}" />
    <figcaption>
      ${tagsTemplate(recipe.tags)}
      <h2><a href="#">${recipe.name}</a></h2>
      <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
      <p class="recipe__description">${recipe.description}</p>
    </figcaption>
  </figure>`;
}

// 03. Render and init
function renderRecipes(recipeList) {
  const main = document.querySelector('main');
  main.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

init();

// 04. Search Filtering
function filterRecipes(query) {
  const filtered = recipes.filter(recipe => {
    const q = query.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(q) ||
      recipe.description.toLowerCase().includes(q) ||
      recipe.ingredients.find(ing => ing.toLowerCase().includes(q)) ||
      recipe.tags.find(tag => tag.toLowerCase().includes(q))
    );
  });
  return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault();
  const input = document.querySelector('#search-form input');
  const query = input.value.toLowerCase();
  const filtered = filterRecipes(query);
  renderRecipes(filtered);
}

document.querySelector('#search-form').addEventListener('submit', searchHandler);
