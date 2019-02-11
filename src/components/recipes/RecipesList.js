import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import recipesService from '../../services/recipes';

// TODO use actions and reducers instead of this fetch
const defaultRecipesContext = {
  recipes: [],
  isFetching: true,
  errorFetching: null,
};

class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = defaultRecipesContext;
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
          <Link key={index} to={"/recipe/" + recipe.filename}>{recipe.name}</Link>
        )}
      </div>
    );
  }
}

export default RecipesList;