import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as recipeActions from '../../actions/recipe-actions';

import RecipesList from './RecipesList';
import Recipe from './Recipe';

class RecipesPage extends Component {
  componentDidMount() {
    const { actions, files } = this.props;

    if (files.length === 0) {
      actions.loadRecipes();
    }
  }

  render() {
    return (
      <div className="recipes-page" >
        <RecipesList />
        <Recipe />
      </div>
    );
  }
}

RecipesPage.propTupes = {
  actions: PropTypes.object.isRequired,
  files: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    files: state.recipes.files,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadRecipes: bindActionCreators(recipeActions.loadRecipes, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);