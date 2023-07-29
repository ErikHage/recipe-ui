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

  updateRecipesFilter = (event) => {
    this.props.actions.updateRecipesFilter(event.target.value);
  };

  mapRecipesToRows = (files, filterString) => {
    console.log(`in mapRecipesToRows, filter string is ${filterString}`);
    return files
        .filter(recipe => {
          return filterString
              ? recipe.recipeName.toLowerCase().includes(filterString.toLowerCase())
              : true;
        })
        .map((recipe, index) => this.mapRecipeToRow(recipe, index))
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
    if (this.props.sidebarCollapsed) {
      return <div className="recipes-list-collapsed"></div>
    } else {
      return (
          <div className="recipes-list">
            <span className="recipes-list-menu-title">Recipes</span>
            <input type="search" onChange={this.updateRecipesFilter} placeholder="filter" />
            <button onClick={this.clearSelection}>Clear Selection</button>

            <div className="recipe-selection-menu">
              {this.mapRecipesToRows(this.props.files, this.props.filterString)}
            </div>
          </div>
      );
    }
  }
}

RecipesList.propTypes = {
  sidebarCollapsed: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  files: PropTypes.array.isRequired,
  selectedRecipe: PropTypes.object,
  filterString: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    sidebarCollapsed: state.recipes.sidebarCollapsed,
    files: state.recipes.files,
    selectedRecipe: state.recipes.selected,
    recipeCache: state.recipes.recipeCache,
    filterString: state.recipes.filterString,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadSelectedRecipe: bindActionCreators(recipeActions.loadSelectedRecipe, dispatch),
      loadSelectedRecipeSuccess: bindActionCreators(recipeActions.loadSelectedRecipeSuccess, dispatch),
      clearSelection: bindActionCreators(recipeActions.clearSelection, dispatch),
      updateRecipesFilter: bindActionCreators(recipeActions.updateRecipesFilter, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
