import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipesList from './RecipesList';
import Recipe from './Recipe';

class RecipesPage extends Component {
  render() {
    return (
      <div className="recipes-page" >
        <RecipesList />
        <Recipe />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(RecipesPage);