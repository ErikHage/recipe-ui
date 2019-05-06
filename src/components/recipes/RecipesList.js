import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';

import * as recipeActions from '../../actions/recipe-actions';

class RecipesList extends Component {
  selectRecipe = (event) => {
    const recipeFilename = event.target.name;
    const cachedRecipe = this.props.recipeCache[recipeFilename];

    if (cachedRecipe) {
      return this.props.actions.loadSelectedRecipeSuccess(cachedRecipe, recipeFilename);
    }

    return this.props.actions.loadSelectedRecipe(recipeFilename);
  };

  clearSelection = () => {
    this.props.actions.clearSelection();
  };

  render() {
    return (
      <div className="recipes-list">
        <h4>Recipes</h4>
        {this.props.files.map((recipe, index) => 
          <div key={index}>
            <a className="recipes-list-item" onClick={this.selectRecipe} name={recipe.filename}>{recipe.name}</a>
            <br />
          </div>
        )}
        <button onClick={this.clearSelection}>Clear</button>
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