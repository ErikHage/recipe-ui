$(document).ready(function() {

  let ingredientIndex = 0;
  let stepIndex = 0;

  function addIngredient() {
    const ingredientsDiv = $('#ingredients');

    const newHTML = `
      <div class="fb-text form-group">
        <p>Ingredient ${(ingredientIndex + 1)}</p>
        <label for="ingredientName${ingredientIndex}" class="fb-text-label">Name</label>
        <input type="text" class="form-control" name="ingredientName${ingredientIndex}" id="ingredientName${ingredientIndex}">
        <label for="quantityKind${ingredientIndex}" class="fb-text-label">Quantity Kind</label>
        <input type="text" class="form-control" name="quantityKind${ingredientIndex}" id="quantityKind${ingredientIndex}">
        <label for="quantityValue${ingredientIndex}" class="fb-text-label">Quantity Value</label>
        <input type="number" class="form-control" name="quantityValue${ingredientIndex}" id="quantityValue${ingredientIndex}">
        <label for="notes${ingredientIndex}" class="fb-text-label">Name</label>
        <input type="text" class="form-control" name="notes${ingredientIndex}" id="notes${ingredientIndex}">
      </div>
    `;

    ingredientIndex = ingredientIndex + 1;

    ingredientsDiv.append($.parseHTML(newHTML));
  };

  function addStep() {
    const stepsDiv = $('#steps');

    const newHTML = `
      <label for="stepText${stepIndex}" class="fb-text-label">Step ${(stepIndex + 1)}</label>
      <input type="text" class="form-control" name="stepText${stepIndex}" id="stepText${stepIndex}">
    `;

    stepIndex = stepIndex + 1;

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

    const ingredientNodes = $('#ingredients');

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
      ingredients: ingredientNodes.map(ingredientNode => ({
        name: "",
        quantity: {
          kind: "",
          value: 0,
        },
        notes: "",
      })),
    };

    $('#outputTextBox').val(JSON.stringify(json, null, 2));
  });
});