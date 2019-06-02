import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeHeader from './RecipeHeader';
import IngredientsSection from './IngredientsSection';
import StepsSection from './StepsSection';
import RecipeStats from './RecipeStats';

class Recipe extends Component {
  renderDefaultContent() {
    return (
      <div className="recipe-content">
        <h3 className="default-recipe-content">Pick a recipe from the menu on the left to view.</h3>
      </div>
    );
  }

  renderRecipe(recipe) {
    return (
      <div className="recipe-content">
        <RecipeHeader recipeName={recipe.recipeName} />
        <RecipeStats prep={recipe.prep} cook={recipe.cook} yield={recipe.yield} />
        <IngredientsSection ingredients={recipe.ingredients} />
        <StepsSection steps={recipe.steps} />
      </div>
    );
  }

  render() {
    if (this.props.recipe) {
      const recipe = this.props.recipe;
      
      return this.renderRecipe(recipe);
    }

    return this.renderDefaultContent();
  }
}

function mapStateToProps(state, ownProps) {
  return {
    recipe: state.recipes.selected,
  };
}

export default connect(mapStateToProps)(Recipe);