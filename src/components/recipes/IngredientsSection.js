import React, { Component } from 'react';

function getNotes(notes) {
  return notes ? `(${notes})` : '';
}

function getQuantity(quantity) {
  let quantityContent = '';

  if (quantity.value) {
    quantityContent += `${quantity.value} `;
  }

  if (quantity.kind) {
    quantityContent += `${quantity.kind} `;
  }

  return quantityContent;
}

function toIngredientRow(ingredient, index) {
  const { name, quantity, notes } = ingredient;

  let content = getQuantity(quantity);

  content += `${name} `;

  return (
      <li key={index}>{content} <i>{getNotes(notes)}</i></li>
  );
}

class IngredientsSection extends Component {
  render() {
    return (
      <div>
        <h3>Ingredients</h3>
        <ul>
          {this.props.ingredients.map(toIngredientRow)}
        </ul>
      </div>
    );
  }
}

export default IngredientsSection;
