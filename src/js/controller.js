import * as model from './model';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView';
import resultsView from './views/resultsView';

import 'regenerator-runtime/runtime';
import 'core-js/stable';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);
    const recipe = model.state.recipe;

    recipeView.render(recipe);
  } catch (err) {
    recipeView.renderError(
      'We could not find that recipe. Please try another one!'
    );
  }
};

const controlSearchResult = async () => {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    resultsView.render(model.state.search.results);
  } catch (error) {
    ('We could not find that recipe. Please try another one!');
  }
};

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResult);
};

init();
