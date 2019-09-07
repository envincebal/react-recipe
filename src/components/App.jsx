import React, { Component } from 'react';
import Search from "./Search";
import CheckBoxes from "./CheckBoxes";
import Recipe from "./Recipe";
import getRecipe from "../utils/api";
import '../styles/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">
            <i className="fas fa-utensils"></i> Find A Recipe <i className="fas fa-hamburger"></i>
          </h1>
          <Search />
          <div className="checkbox-container">
            <CheckBoxes />
          </div>
        </header>
        <section>
          <div className="recipe-container">
            <Recipe />
            {getRecipe("chicken")}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
