import React, { Component } from 'react';

import './App.css';

import RecipesPage from './recipes/RecipesPage';

class App extends Component {
  render() {
    return (
      <div className="flex-container" >
        <RecipesPage />
      </div>
    );
  }
}

export default App;
