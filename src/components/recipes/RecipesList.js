import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import * as recipeActions from '../../actions/recipe-actions';

// import recipesService from '../../services/recipes';

// // TODO use actions and reducers instead of this fetch
// const defaultRecipesContext = {
//   recipes: [],
//   isFetching: true,
//   errorFetching: null,
// };

class RecipesList extends Component {
  constructor(props) {
    super(props);

    this.selectRecipe = this.selectRecipe.bind(this);
  }

  // componentDidMount() {
  //   this.fetchAllRecipes();
  // }

  // async fetchAllRecipes() {
  //   await recipesService
  //     .getRecipes()
  //     .then(recipes => {
  //       this.setState({
  //         recipes,
  //         isFetching: false
  //       });
  //     })
  //     .catch(error => this.setState({
  //       errorFetching: error, 
  //       isFetching: false
  //     }));
  // }

  selectRecipe(event) {
    this.props.dispatch(recipeActions.selectRecipe(event.target));
  }

  render() {
    return (
      <div>
        <div>
          {this.props.files.map((recipe, index) => 
            <h3 key={index} onClick={this.selectRecipe} filename={recipe.filename}>{recipe.name}</h3>
          )}
        </div>
        <div>
          <p>Selected recipe is: {this.props.selectedRecipe}</p>
        </div>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       {this.state.recipes.map((recipe, index) => 
  //         <Link key={index} to={"/recipe/" + recipe.filename}>{recipe.name}</Link>
  //       )}
  //     </div>
  //   );
  // }
}

function mapStateToProps(state, ownProps) {
  return {
    files: state.recipes.files,
    selectedRecipe: state.recipes.selected,
  };
}

export default connect(mapStateToProps)(RecipesList);