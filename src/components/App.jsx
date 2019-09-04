import React, { Component } from 'react';
import Search from "./Search";
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
        </header>
      </div>
    );
  }
}

export default App;
