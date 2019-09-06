import React, { Component } from 'react';
import Search from "./Search";
import CheckBoxes from "./CheckBoxes";
import Recipe from "./Recipe";
import '../styles/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">
            <i class="fas fa-utensils"></i> Find A Recipe <i class="fas fa-hamburger"></i>
          </h1>
          <Search />
          <div className="checkbox-container">
            <CheckBoxes />
          </div>
        </header>
        <section>
          <div className="recipe-container">
            <Recipe />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
