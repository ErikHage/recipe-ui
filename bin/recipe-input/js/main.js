$(document).ready(function() {

  let currentJson = {};

  let ingredientIndex = 0;
  let stepIndex = 0;

  const loadFileInput = $('#loadFileInput');
  const ingredientsTBody = $('#ingredients');
  const stepsDiv = $('#steps');

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

  $('#loadFileButton').click(function(e) {
    e.preventDefault();
    const file = loadFileInput[0].files[0];

    if (!file || file.type !== "application/json") {
      alert('Please select a valid JSON file.');
      return;
    }
    console.log('selected file: ' + file.name);

    const fileReader = new FileReader();
    fileReader.onload = function(e) {
      const contents = e.target.result;
      currentJson = JSON.parse(contents);
      console.log("loaded data: " + JSON.stringify(currentJson));
      populateInputsFromCurrentJson();
    }
    fileReader.readAsText(file);
  });

  $('#addIngredientButton').click(function(e) {
    e.preventDefault();
    addIngredient();
  });

  $('#addStepButton').click(function(e) {
    e.preventDefault();
    addStep();
  });

  $('#toJsonButton').click(function(e) {
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

    currentJson = {
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

    $('#outputTextBox').val(JSON.stringify(currentJson, null, 2));
  });

  function populateInputsFromCurrentJson() {
    $('#recipeId').val(currentJson.recipeId);
    $('#recipeName').val(currentJson.recipeName);
    $('#keywords').val(currentJson.keywords?.join(","));
    $('#prepTimeKind').val(currentJson.prep.kind);
    $('#prepTimeValue').val(currentJson.prep.value);
    $('#cookTimeKind').val(currentJson.cook.kind);
    $('#cookTimeValue').val(currentJson.cook.value);
    $('#yieldKind').val(currentJson.yield.kind);
    $('#yieldValue').val(currentJson.yield.value);
    $('#calories').val(currentJson?.nutrition?.calories);
    $('#fats').val(currentJson?.nutrition?.fats);
    $('#carbohydrates').val(currentJson?.nutrition?.carbohydrates);
    $('#sugars').val(currentJson?.nutrition?.sugars);
    $('#protein').val(currentJson?.nutrition?.protein);


  }
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