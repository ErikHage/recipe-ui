import recipesDatasource from './datasource';

const getRecipes = async () => recipesDatasource.getRecipes();

const getRecipe = async (recipeId) => recipesDatasource.getRecipe(recipeId);

export default {
  getRecipes,
  getRecipe,
};