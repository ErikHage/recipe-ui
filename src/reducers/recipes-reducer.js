// import { FETCH_RECIPES, SELECT_RECIPE } from '../actions';

// export default (state = {}, action) => {
//     switch(action.type) {
//         case FETCH_RECIPES: 
//             return (Object.assign(
//               {}, 
//               state, 
//               { recipes: action.recipes }
//             ));
//         case SELECT_RECIPE: 
//             return (Object.assign(
//               {}, 
//               state, 
//               { currentSelection: action.recipe }
//             ));    
//         default:
//             return state;
//     }
// }

export default function recipesReducer(state = {}, action) {
  switch (action.type) {
    case 'SELECT_RECIPE':
      return Object.assign({}, state, {
        selected: action.recipe,
      });
    default: 
      return state;
  }
}