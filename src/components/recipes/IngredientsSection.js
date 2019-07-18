import React, { Component } from 'react';

function getNotes(notes) {
  return notes ? <i>({notes})</i> : <i></i>;
}

class IngredientsSection extends Component {
  // TODO add notes as a tooltip?

  render() {
    return (
      <div>
        <h3>Ingredients</h3>
        <ul>
          {this.props.ingredients.map((ingredient, index) =>
              <li key={index}>{ingredient.quantity.value} {ingredient.quantity.kind} {ingredient.name} {getNotes(ingredient.notes)}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default IngredientsSection;
