$(document).ready(function() {

  let ingredientIndex = 0;
  let stepIndex = 0;

  function addIngredient() {
    const ingredientsTBody = $('#ingredients');

    ingredientIndex = ingredientIndex + 1;

    // bootstrap layout
    // const newHTML = `
    //   <div class="form-group">
    //     <p>Ingredient ${(ingredientIndex)}</p>
    //     <label for="ingredientName${ingredientIndex}">Name</label>
    //     <input type="text" class="form-control" name="ingredientName${ingredientIndex}" id="ingredientName${ingredientIndex}">
    //     <label for="quantityKind${ingredientIndex}">Quantity Kind</label>
    //     <input type="text" class="form-control" name="quantityKind${ingredientIndex}" id="quantityKind${ingredientIndex}">
    //     <label for="quantityValue${ingredientIndex}">Quantity Value</label>
    //     <input type="number" class="form-control" name="quantityValue${ingredientIndex}" id="quantityValue${ingredientIndex}">
    //     <label for="notes${ingredientIndex}">Notes</label>
    //     <input type="text" class="form-control" name="notes${ingredientIndex}" id="notes${ingredientIndex}">
    //   </div>
    // `;

    const newHTML = `
    <tr>
      <td><input style="display:table-cell; width:100%" type="text" name="ingredientName${ingredientIndex}" id="ingredientName${ingredientIndex}"></td>
      <td><input style="display:table-cell; width:100%" type="number" name="quantityValue${ingredientIndex}" id="quantityValue${ingredientIndex}"></td>
      <td><input style="display:table-cell; width:100%" type="text" name="quantityKind${ingredientIndex}" id="quantityKind${ingredientIndex}"></td>
      <td><input style="display:table-cell; width:100%" type="text" name="notes${ingredientIndex}" id="notes${ingredientIndex}"></td>
    </tr>
  `;

    ingredientsTBody.append($.parseHTML(newHTML));
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
    const keywords = $('#keywords').val()
      .split(',')
      .filter(keyword => keyword.length > 0)
      .map(keyword => keyword.trim());

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