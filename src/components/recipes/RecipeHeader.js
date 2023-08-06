import React, { Component } from 'react';

class RecipeHeader extends Component {
  render() {
    if (this.props.keywords) {
      return (
          <div className={'recipe-section header-section'}>
            <h1 className={'recipe-section-header'}>{this.props.recipeName}</h1>
            <span>{this.props.keywords.join(', ')}</span>
          </div>
      );
    }

    return (
      <div className={'recipe-section header-section'}>
        <h1 className={'recipe-section-header'}>{this.props.recipeName}</h1>
      </div>
    );
  }
}

export default RecipeHeader;
