import githubDatasource from './datasource'; 

const getRecipes = () => githubDatasource.getRecipes();

export default {
  getRecipes,
};