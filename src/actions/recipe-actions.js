export const SELECT_RECIPE = 'SELECT_RECIPE';

export function selectRecipe(filename) {
  return {
    type: SELECT_RECIPE,
    filename,
  };
}

export const CLEAR_SELECTION = 'CLEAR_SELECTION';

export function clearSelection() {
  return {
    type: CLEAR_SELECTION,
  };
}