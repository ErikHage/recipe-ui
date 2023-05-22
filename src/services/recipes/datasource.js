import request from 'superagent';

// todo map response body to local obj

const getRecipes = async () => {
  const { body } = await request
  .get('https://theferalrooster.com/api/recipes-service/recipes')
  .accept('application/json');

  return body;
};

const getRecipe = async (recipeId) => {
  const { body } = await request
  .get(`https://theferalrooster.com/api/recipes-service/recipes/${recipeId}`)
  .accept('application/json');

  return body;
};

export default {
  getRecipes,
  getRecipe,
};
