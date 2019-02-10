// basic react component starting template
import React, { Component } from 'react';
import recipe1 from '../test-data/vodka-sauce-recipe.json';

const recipes = [
  recipe1,
  {
    name: 'some-name-2',
  },
];

class RecipesList extends Component {
  render() {
    return (
      <div>
        {recipes.map((recipe, index) => 
          <p>{recipe.name}</p>
        )}
      </div>
    );
  }
}

export default RecipesList;