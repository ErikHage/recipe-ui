import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as recipeActions from '../../actions/recipe-actions';

import RecipeHeader from './RecipeHeader';
import IngredientsSection from './IngredientsSection';
import StepsSection from './StepsSection';
import RecipeStats from './RecipeStats';

class RecipePage extends Component {
  constructor(props) {
    super(props);

    this.clearSelection = this.clearSelection.bind(this);
  }

  clearSelection() {
    this.props.dispatch(recipeActions.clearSelection());
  }

  render() {
    const recipe = this.props.recipe;

    return (
      <div>
        <button onClick={this.clearSelection}>Back</button>
        <RecipeHeader recipeName={recipe.name} />
        <RecipeStats prep={recipe.prep} cook={recipe.cook} yield={recipe.yield} />
        <IngredientsSection ingredients={recipe.ingredients} />
        <StepsSection steps={recipe.steps} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    recipe: state.recipes.selected,
  };
}

export default connect(mapStateToProps)(RecipePage);