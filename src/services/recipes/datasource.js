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
  filename: rawData.name,
});

const getRecipes = async () => {
  const res = await request
  .get('http://api.github.com/repos/ErikHage/my-recipes/contents/json')
  .accept('application/json');

  return res.body.map(fromResponse);
};

const parseResponseBody = (body) => {
  const { content, encoding } = body;  
  const buff = new Buffer(content, encoding);  
  return  JSON.parse(buff.toString());
};

const getRecipe = async (filename) => {
  const { body } = await request
  .get(`http://api.github.com/repos/ErikHage/my-recipes/contents/json/${filename}?ref=master`)
  .accept('application/json');

  return parseResponseBody(body);
};

export default {
  getRecipes,
  getRecipe,
};
