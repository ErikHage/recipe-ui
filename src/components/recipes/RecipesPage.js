import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as recipeActions from '../../actions/recipe-actions';

import RecipesList from './RecipesList';
import Recipe from './Recipe';

class RecipesPage extends Component {
  componentDidMount() {
    this.props.actions.loadRecipes();
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
};

function mapStateToProps(state, ownProps) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recipeActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);