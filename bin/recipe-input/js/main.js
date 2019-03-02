$(document).ready(function() {
  
  const toJsonButton = $('#toJsonButton');

  toJsonButton.click(function() {
    const recipeId = 'TODO generate me plz';
    const recipeName = $('#recipeName').val();
    const prepTimeKind = $('#prepTimeKind').val();
    const prepTimeValue = Number($('#prepTimeValue').val());
    const cookTimeKind = $('#cookTimeKind').val();
    const cookTimeValue = Number($('#cookTimeValue').val());
    const yieldKind = $('#yieldKind').val();
    const yieldValue = Number($('#yieldValue').val());

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
    };

    $('#outputTextBox').val(JSON.stringify(json, null, 2));
  });
});