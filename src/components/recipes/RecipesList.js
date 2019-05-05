import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import * as recipeActions from '../../actions/recipe-actions';
import { bindActionCreators } from "redux";

class RecipesList extends Component {
  constructor(props) {
    super(props);

    this.selectRecipe = this.selectRecipe.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
  }

  selectRecipe(event) {
    this.props.actions.loadSelectedRecipe(event.target.name);
  }

  clearSelection() {
    this.props.actions.clearSelection();
  }

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
};

function mapStateToProps(state, ownProps) {
  return {
    files: state.recipes.files,
    selectedRecipe: state.recipes.selected,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recipeActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);