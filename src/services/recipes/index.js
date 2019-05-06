import recipesDatasource from './datasource';

const getRecipes = async () => recipesDatasource.getRecipes();

const getRecipe = async (filename) => recipesDatasource.getRecipe(filename);

export default {
  getRecipes,
  getRecipe,
};