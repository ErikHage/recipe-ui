import githubDatasource from './datasource'; 

const getRecipes = () => githubDatasource.getRecipes();

const getRecipe = (filename) => githubDatasource.getRecipe(filename);

export default {
  getRecipes,
  getRecipe,
};