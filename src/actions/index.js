import vodkaSauceRecipe from '../test-data/vodka-sauce.json';

export const FETCH_RECIPES = 'fetch_recipes';

export function fetchRecipes() {
  // TODO load recipes from service
  return {
    type: FETCH_RECIPES,
    recipes: [{
      name: 'Vodka Sauce',
      filename: 'vodka-sauce.json',
    }],
  }
}

export const SELECT_RECIPE = 'select_recipe';

export function selectRecipe(filename) {
  // TODO load recipe from service
  return {
    type: SELECT_RECIPE,
    recipe: vodkaSauceRecipe,
  }
}