$(document).ready(function() {

  let ingredientIndex = 0;
  let stepIndex = 0;

  const stepsDiv = $('#steps');
  const ingredientsTBody = $('#ingredients');

  function addIngredient() {
    ingredientIndex = ingredientIndex + 1;

    const newIngredientRowHtml = getIngredientRowHtml(ingredientIndex);

    ingredientsTBody.append($.parseHTML(newIngredientRowHtml));
  }

  function addStep() {
    stepIndex = stepIndex + 1;

    const newStepRowHtml = getStepRowHtml(stepIndex);

    stepsDiv.append($.parseHTML(newStepRowHtml));
  }
  
  const addIngredientButton = $('#addIngredientButton');
  const addStepButton = $('#addStepButton');
  const toJsonButton = $('#toJsonButton');

  addIngredientButton.click(function(e) {
    e.preventDefault();
    addIngredient();
  });

  addStepButton.click(function(e) {
    e.preventDefault();
    addStep();
  });

  toJsonButton.click(function(e) {
    e.preventDefault();

    const recipeId = $('#recipeId').val();
    const recipeName = $('#recipeName').val();
    const prepTimeKind = $('#prepTimeKind').val();
    const prepTimeValue = Number($('#prepTimeValue').val());
    const cookTimeKind = $('#cookTimeKind').val();
    const cookTimeValue = Number($('#cookTimeValue').val());
    const yieldKind = $('#yieldKind').val();
    const yieldValue = Number($('#yieldValue').val());
    const keywords = $('#keywords').val()
      .split(',')
      .filter(keyword => keyword.length > 0)
      .map(keyword => keyword.trim());

    const calories = Number($('#calories').val());
    const fats = Number($('#fats').val());
    const carbohydrates = Number($('#carbohydrates').val());
    const sugars = Number($('#sugars').val());
    const protein = Number($('#protein').val());

    const ingredients = [];
    const steps = [];

    for (let i = 1; i <= ingredientIndex; i++) {
      const ingredient = {
        quantity: {},
      };
      ingredient.name = $(`#ingredientName${i}`).val();
      ingredient.quantity.kind = $(`#quantityKind${i}`).val();
      ingredient.quantity.value = Number($(`#quantityValue${i}`).val());
      ingredient.notes = $(`#notes${i}`).val();

      ingredients.push(ingredient);
    }

    for (let i = 1; i <= stepIndex; i++) {
      const step = {};
      step.id = i;
      step.text = $(`#stepText${i}`).val();

      steps.push(step);
    }

    const json = {
      recipeId,
      recipeName,
      prep: {
        kind: prepTimeKind,
        value: prepTimeValue,
      },
      cook: {
        kind: cookTimeKind,
        value: cookTimeValue,
      },
      yield: {
        kind: yieldKind,
        value: yieldValue,
      },
      ingredients,
      steps,
      keywords,
      nutrition: {
        calories: calories <= 0 ? null : calories,
        fats: fats <= 0 ? null : fats,
        carbohydrates: carbohydrates <= 0 ? null : carbohydrates,
        sugars: sugars <= 0 ? null : sugars,
        protein: protein <= 0 ? null : protein,
      },
    };

    $('#outputTextBox').val(JSON.stringify(json, null, 2));
  });
});

function getIngredientRowHtml(ingredientIndex) {
  return `
    <tr>
      <td><input class="ingredient-row" type="text" name="ingredientName${ingredientIndex}" id="ingredientName${ingredientIndex}"></td>
      <td><input class="ingredient-row" type="number" name="quantityValue${ingredientIndex}" id="quantityValue${ingredientIndex}"></td>
      <td><input class="ingredient-row" type="text" name="quantityKind${ingredientIndex}" id="quantityKind${ingredientIndex}"></td>
      <td><input class="ingredient-row" type="text" name="notes${ingredientIndex}" id="notes${ingredientIndex}"></td>
    </tr>
  `;
}

function getStepRowHtml(stepIndex) {
  return `
      <div class="row">
        <label for="stepText${stepIndex}" class="col-1">Step ${(stepIndex)}</label>
        <div class="col-11">
          <input type="text" class="form-control" name="stepText${stepIndex}" id="stepText${stepIndex}">
        </div>
      </div>  
  `;
}