import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as recipeActions from '../../actions/recipe-actions';

class RecipesList extends Component {
  constructor(props) {
    super(props);

    this.selectRecipe = this.selectRecipe.bind(this);
  }

  selectRecipe(event) {
    this.props.dispatch(recipeActions.selectRecipe(event.target.name));
  }

  render() {
    return (
      <div>
        {this.props.files.map((recipe, index) => 
          <div key={index}>
            <a onClick={this.selectRecipe} name={recipe.filename}>{recipe.name}</a>
            <br />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    files: state.recipes.files,
    selectedRecipe: state.recipes.selected,
  };
}

export default connect(mapStateToProps)(RecipesList);