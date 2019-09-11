import React, { Component } from 'react';
import Search from "./Search";
import CheckBoxes from "./CheckBoxes";
import Recipe from "./Recipe";
import '../styles/styles.css';
import api from "../utils/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      checkboxes: [],
      ingredient: ""
    }
  }

  handleChange = (e) => {
    this.setState({ ingredient: e.target.value })
  }

  handleRecipes = search => {
    api.getRecipe(search)
      .then(res => res.json())
      .then(data => {
        const results = data.hits;

        results.forEach(item => {
          this.setState(prevState => ({
            recipes: [...prevState.recipes, item]
          }))
        });
      })
  }

  handleFiltedRecipes = (search, filters) => {
    api.filteredRecipes(search)
      .then(res => res.json())
      .then(data => {
        const results = data.hits;

        results.forEach(item => {
          this.setState(prevState => ({
            recipes: [...prevState.recipes, item]
          }))
        });
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleRecipes(this.state.ingredient);
  }

  isChecked = () => {
    const checkboxes = document.getElementsByClassName("checkboxes");
    const filters = [];

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked === true) {
        filters.push(checkboxes[i].value);
      }

    }
    this.setState({
      checkboxes: filters
    })

  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">
            <i className="fas fa-utensils"></i> Find A Recipe <i className="fas fa-hamburger"></i>
          </h1>
          <Search
            change={this.handleChange}
            value={this.state.ingredient}
            submit={this.handleSubmit}
          />
          <div className="checkbox-container">
            <CheckBoxes
              click={this.isChecked}
            />
          </div>
        </header>
        <section>
          <div className="recipe-container">
            <Recipe
              items={this.state.recipes}
            />

            {console.log(this.state.checkboxes)}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
