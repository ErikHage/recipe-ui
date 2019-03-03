$(document).ready(function() {

  let ingredientIndex = 0;
  let stepIndex = 0;

  function addIngredient() {
    const ingredientsDiv = $('#ingredients');

    ingredientIndex = ingredientIndex + 1;

    const newHTML = `
      <div class="fb-text form-group">
        <p>Ingredient ${(ingredientIndex)}</p>
        <label for="ingredientName${ingredientIndex}" class="fb-text-label">Name</label>
        <input type="text" class="form-control" name="ingredientName${ingredientIndex}" id="ingredientName${ingredientIndex}">
        <label for="quantityKind${ingredientIndex}" class="fb-text-label">Quantity Kind</label>
        <input type="text" class="form-control" name="quantityKind${ingredientIndex}" id="quantityKind${ingredientIndex}">
        <label for="quantityValue${ingredientIndex}" class="fb-text-label">Quantity Value</label>
        <input type="number" class="form-control" name="quantityValue${ingredientIndex}" id="quantityValue${ingredientIndex}">
        <label for="notes${ingredientIndex}" class="fb-text-label">Notes</label>
        <input type="text" class="form-control" name="notes${ingredientIndex}" id="notes${ingredientIndex}">
      </div>
    `;

    ingredientsDiv.append($.parseHTML(newHTML));
  };

  function addStep() {
    const stepsDiv = $('#steps');

    stepIndex = stepIndex + 1;

    const newHTML = `
      <label for="stepText${stepIndex}" class="fb-text-label">Step ${(stepIndex)}</label>
      <input type="text" class="form-control" name="stepText${stepIndex}" id="stepText${stepIndex}">
    `;

    stepsDiv.append($.parseHTML(newHTML));
  };
  
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
    const recipeId = 'TODO generate me plz';
    const recipeName = $('#recipeName').val();
    const prepTimeKind = $('#prepTimeKind').val();
    const prepTimeValue = Number($('#prepTimeValue').val());
    const cookTimeKind = $('#cookTimeKind').val();
    const cookTimeValue = Number($('#cookTimeValue').val());
    const yieldKind = $('#yieldKind').val();
    const yieldValue = Number($('#yieldValue').val());
    const keywords = $('#keywords').val().split(',').filter(keyword => keyword.length > 0);

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
    };

    $('#outputTextBox').val(JSON.stringify(json, null, 2));
  });
});