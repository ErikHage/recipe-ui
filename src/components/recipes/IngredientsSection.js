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

  return (
      <li key={index} className={'ingredients-ul-item'}>
        <span className={'ingredient-measure'}>{content}</span>
        <span className={'ingredient-description'}>{name} <i>{getNotes(notes)}</i></span>
      </li>
  );
}

class IngredientsSection extends Component {
  render() {
    return (
      <div className={'recipe-section ingredients-section'}>
        <h3 className={'recipe-section-header'}>Ingredients</h3>
        <ul className={'ingredients-ul'}>
          {this.props.ingredients.map(toIngredientRow)}
        </ul>
      </div>
    );
  }
}

export default IngredientsSection;
