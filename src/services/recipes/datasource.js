import request from 'superagent';

// todo map response body to local obj

const domain = 'https://theferalrooster.com';
// const domain = 'http://localhost:3000';

const getRecipes = async () => {
  const { body } = await request
  .get(`${domain}/api/recipes-service/recipes`)
  .accept('application/json');

  return body;
};

const getRecipe = async (recipeId) => {
  const { body } = await request
  .get(`${domain}/api/recipes-service/recipes/${recipeId}`)
  .accept('application/json');

  return body;
};

export default {
  getRecipes,
  getRecipe,
};
