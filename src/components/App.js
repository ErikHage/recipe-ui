import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';

import './App.css';

import RecipesList from './recipes/RecipesList';
import RecipePage from './recipes/RecipePage';

class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    // this.props.defaultFunction();
  }

  render() {
    let content = <RecipesList />

    if (this.props.recipes.selected) {
      content = <RecipePage />
    }

    return (
      <div>
        {content}
      </div>
      // <main>
      //   <Switch>
      //     <Route exact path="/" component={RecipesList} />
      //     <Route path="/recipe/:filename" component={RecipePage} />
      //   </Switch>
      // </main>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {})(App);
