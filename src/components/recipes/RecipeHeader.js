import React, { Component } from 'react';

class RecipeHeader extends Component {
  render() {
    return (
      <div className={'recipe-section header-section'}>
        <h1 className={'recipe-section-header'}>{this.props.recipeName}</h1>
      </div>
    );
  }
}

export default RecipeHeader;