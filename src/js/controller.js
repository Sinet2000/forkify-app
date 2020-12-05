import * as model from './model';
import recipeView from './recipes/recipeView.js';

import 'regenerator-runtime/runtime';
import 'core-js/stable';

const recipeContainer = document.querySelector('.recipe');

//API for this app:
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    // !) Loading recipe
    await model.loadRecipe(id);
    const recipe = model.state.recipe;

    //2) rendering recipe
    recipeView.render(recipe);
  } catch (err) {
    alert(err);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
