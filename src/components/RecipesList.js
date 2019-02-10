// basic react component starting template
import React, { Component } from 'react';

import recipesService from '../services/recipes';

// TODO use actions and reducers instead
const defaultRecipesContext = {
  recipes: [],
  isFetching: true,
  errorFetching: null,
};

class RecipesList extends Component {
  constructor(props) {
    super(props)
    this.state = defaultRecipesContext
  }

  componentDidMount() {
    this.fetchAllRecipes();
  }

  async fetchAllRecipes() {
    await recipesService
      .getRecipes()
      .then(recipes => {
        this.setState({
          recipes,
          isFetching: false
        });
      })
      .catch(error => this.setState({
        errorFetching: error, 
        isFetching: false
      }));
  }

  render() {
    return (
      <div>
        {this.state.recipes.map((recipe, index) => 
          <p>{recipe.name} : {recipe.url}</p>
        )}
      </div>
    );
  }
}

export default RecipesList;