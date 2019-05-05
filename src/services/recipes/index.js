import vodkaSauceRecipe from '../../test-data/vodka-sauce.json';
import poundCakeRecipe from '../../test-data/pound-cake.json';

import recipesDatasource from './datasource';

const getRecipes = async () => recipesDatasource.getRecipes();

const recipes = {
  'vodka-sauce.json': vodkaSauceRecipe,
  'pound-cake.json': poundCakeRecipe
};

const getRecipe = async (filename) => recipesDatasource.getRecipe(filename);

export default {
  getRecipes,
  getRecipe,
};