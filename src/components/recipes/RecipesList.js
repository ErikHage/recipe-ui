import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';

import * as recipeActions from '../../actions/recipe-actions';

class RecipesList extends Component {
  selectRecipe = (event) => {
    const recipeId = event.target.name;
    const cachedRecipe = this.props.recipeCache[recipeId];

    if (cachedRecipe) {
      return this.props.actions.loadSelectedRecipeSuccess(cachedRecipe, recipeId);
    }

    return this.props.actions.loadSelectedRecipe(recipeId);
  };

  clearSelection = () => {
    this.props.actions.clearSelection();
  };

  mapRecipeToRow = (recipe, index) => {
    const { selectedRecipe } = this.props;

    if (selectedRecipe && selectedRecipe.recipeId === recipe.recipeId) {
      return <div key={index}>
        <a className={'recipes-list-selected-item'} name={recipe.recipeId}>{recipe.recipeName}</a>
      </div>;
    }

    return <div key={index}>
      <a className={'recipes-list-item'} onClick={this.selectRecipe} name={recipe.recipeId}>{recipe.recipeName}</a>
    </div>;
  };

  render() {
    return (
      <div className="recipes-list">
        <span className="recipes-list-menu-title">Recipes</span>
        <button onClick={this.clearSelection}>Clear Selection</button>
        <div className="recipe-selection-menu">
        {this.props.files.map((recipe, index) => this.mapRecipeToRow(recipe, index) )}
        </div>
      </div>
    );
  }
}

RecipesList.propTupes = {
  actions: PropTypes.object.isRequired,
  files: PropTypes.array.isRequired,
  selectedRecipe: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    files: state.recipes.files,
    selectedRecipe: state.recipes.selected,
    recipeCache: state.recipes.recipeCache,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadSelectedRecipe: bindActionCreators(recipeActions.loadSelectedRecipe, dispatch),
      loadSelectedRecipeSuccess: bindActionCreators(recipeActions.loadSelectedRecipeSuccess, dispatch),
      clearSelection: bindActionCreators(recipeActions.clearSelection, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);