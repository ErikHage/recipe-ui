import request from 'superagent';

/**
 * Expects a filename in the format "recipe-name.json" and transforms it to "Recipe Name"
 * @param {*} filename 
 */
const parseNameFromFileName = (filename) => {
  const [snakeCaseName] = filename.split('.');
  const words = snakeCaseName.split('-');

  return words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const fromResponse = (rawData) => ({
  name: parseNameFromFileName(rawData.name),
  url: rawData.url,
});

const getRecipes = async () => {
  const res = await request
  .get('http://api.github.com/repos/ErikHage/my-recipes/contents/json')
  .accept('application/json');

  return res.body.map(fromResponse);
};

export default {
  getRecipes,
};
