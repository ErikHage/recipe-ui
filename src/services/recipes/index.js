import vodkaSauceRecipe from '../../test-data/vodka-sauce.json';
import poundCakeRecipe from '../../test-data/pound-cake.json';

const getRecipes = () => [
  {
    "name": "Vodka Sauce",
    "filename": "vodka-sauce.json",
  },
  {
    "name": "Pound Cake",
    "filename": "pound-cake.json",
  }
];

const recipes = {
  'vodka-sauce.json': vodkaSauceRecipe,
  'pound-cake.json': poundCakeRecipe
};

const getRecipe = (filename) => recipes[filename];

export default {
  getRecipes,
  getRecipe,
};