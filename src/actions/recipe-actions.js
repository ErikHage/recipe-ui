export function selectRecipe(event) {
  console.log('in select recipe action creator:', event);
  return {
    type: 'SELECT_RECIPE',
    event,
  };
}
