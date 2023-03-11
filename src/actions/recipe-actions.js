import {toastr} from 'react-redux-toastr';

import recipesService from '../services/recipes';
import * as actions from './action-types';

export function collapseSidebar() {
  return {
    type: actions.COLLAPSE_SIDEBAR,
  };
}

export function expandSidebar() {
  return {
    type: actions.EXPAND_SIDEBAR,
  };
}

export function loadSelectedRecipeSuccess(recipe, recipeId) {
  return {
    type: actions.SELECT_RECIPE_SUCCESS,
    recipe,
    recipeId,
  };
}

export function loadSelectedRecipeError(error) {
  return {
    type: actions.SELECT_RECIPE_ERROR,
    error,
  };
}

export function clearSelection() {
  return {
    type: actions.CLEAR_SELECTION,
  };
}

export function loadRecipesSuccess(recipes) {
  return {
    type: actions.LOAD_RECIPES_SUCCESS,
    recipes,
  };
}

export function loadRecipesError(error) {
  return {
    type: actions.LOAD_RECIPES_ERROR,
    error,
  };
}

export function loadRecipes() {
  return async function (dispatch) {
    try {
      const recipes = await recipesService.getRecipes();
      toastr.success('Recipes Loaded successfully!');
      return dispatch(loadRecipesSuccess(recipes));
    } catch (err) {
      toastr.error('Recipes failed to load :-(');
      return dispatch(loadRecipesError(err));
    }
  };
}

export function loadSelectedRecipe(recipeId) {
  return async function (dispatch) {
    try {
      const recipe = await recipesService.getRecipe(recipeId);
      return dispatch(loadSelectedRecipeSuccess(recipe, recipeId));
    } catch (err) {
      return dispatch(loadSelectedRecipeError(err));
    }
  }
}