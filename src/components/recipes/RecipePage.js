import React, { Component } from 'react';

import RecipeHeader from './RecipeHeader';
import IngredientsSection from './IngredientsSection';
import StepsSection from './StepsSection';
import RecipeStats from './RecipeStats';

import recipesService from '../../services/recipes';

// TODO use actions and reducers instead of this fetch
const defaultRecipeContext = {
  recipe: null,
  isFetching: true,
  errorFetching: null,
};

class RecipePage extends Component {
  constructor(props) {
    super(props)
    this.state = defaultRecipeContext;
  }

  componentDidMount() {
    this.fetchRecipe();
  }

  async fetchRecipe() {
    await recipesService
      .getRecipe(this.props.match.params.filename)
      .then(recipe => {
        this.setState({
          recipe,
          isFetching: false
        });
      })
      .catch(error => this.setState({
        errorFetching: error, 
        isFetching: false
      }));
  }

  render() {
    let content;
    
    if (this.state.isFetching) {
      content = (<p>loading...</p>)
    } else {
      content = (
        <div>
          <RecipeHeader recipeName={this.state.recipe.name} />
          <RecipeStats prep={this.state.recipe.prep} cook={this.state.recipe.cook} yield={this.state.recipe.yield} />
          <IngredientsSection ingredients={this.state.recipe.ingredients} />
          <StepsSection steps={this.state.recipe.steps} />
        </div>
      );
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default RecipePage;