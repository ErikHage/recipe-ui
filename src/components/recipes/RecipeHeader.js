import React, { Component } from 'react';

class RecipeHeader extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.recipeName}</h1>
      </div>
    );
  }
}

export default RecipeHeader;