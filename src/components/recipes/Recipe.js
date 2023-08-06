import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeHeader from './RecipeHeader';
import IngredientsSection from './IngredientsSection';
import StepsSection from './StepsSection';
import RecipeStats from './RecipeStats';
import NutritionSection from './NutritionSection';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipe-actions';

class Recipe extends Component {
  toggleSidebar = () => {
    if (this.props.sidebarCollapsed) {
      this.props.actions.expandSidebar();
    } else {
      this.props.actions.collapseSidebar();
    }
  };

  renderListToggleButton() {
      if (this.props.sidebarCollapsed) {
          return <button className="sidebar-toggle-button" onClick={this.toggleSidebar}>&#187;</button>
      } else {
          return <button className="sidebar-toggle-button" onClick={this.toggleSidebar}>&#171;</button>
      }
  }

  renderDefaultContent() {
    return (
      <div className="recipe-content">
        { this.renderListToggleButton() }
        <h3 className="default-recipe-content">Pick a recipe from the menu on the left to view.</h3>
      </div>
    );
  }

  renderRecipe(recipe) {
    return (
      <div className="recipe-content">
        { this.renderListToggleButton() }
        <RecipeHeader recipeName={recipe.recipeName} keywords={recipe.keywords} />
        <RecipeStats prep={recipe.prep} cook={recipe.cook} yield={recipe.yield} />
        <IngredientsSection ingredients={recipe.ingredients} />
        <StepsSection steps={recipe.steps} />
        <NutritionSection nutrition={recipe.nutrition}/>
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

Recipe.propTypes = {
    sidebarCollapsed: PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    sidebarCollapsed: state.recipes.sidebarCollapsed,
    recipe: state.recipes.selected,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      collapseSidebar: bindActionCreators(recipeActions.collapseSidebar, dispatch),
      expandSidebar: bindActionCreators(recipeActions.expandSidebar, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
