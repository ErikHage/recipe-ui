import React, { Component } from 'react';

class NutritionSection extends Component {
  render() {
    const { nutrition = {} } = this.props;

    return (
      <div>
        <h3>Nutritional Information</h3>
        <table id="nutritionalInformation">
          <tr>
            <th className="nutrition-key">Calories</th>
            <td className="nutrition-value">{nutrition.calories ? nutrition.calories : <i>---</i>}  </td>
          </tr>
          <tr>
            <th className="nutrition-key">Fats (g)</th>
            <td className="nutrition-value">{nutrition.fats ? nutrition.fats : <i>---</i>}</td>
          </tr>
          <tr>
            <th className="nutrition-key">Carbohydrates (g)</th>
            <td className="nutrition-value">{nutrition.carbohydrates ? nutrition.carbohydrates : <i>---</i>}</td>
          </tr>
          <tr>
            <th className="nutrition-key">Sugars (g)</th>
            <td className="nutrition-value">{nutrition.sugars ? nutrition.sugars : <i>---</i>}</td>
          </tr>
          <tr>
            <th className="nutrition-key">Protein (g)</th>
            <td className="nutrition-value">{nutrition.protein ? nutrition.protein : <i>---</i>}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default NutritionSection;
