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
      ingredient: "",
      error: false
    }
  }

  handleChange = (e) => {
    this.setState({ ingredient: e.target.value })
  }

  handleRecipes = () => {
    const { ingredient } = this.state;

    api.getRecipe(ingredient)
      .then(res => res.json())
      .then(data => {
        const results = data.hits;

        if (!results.length) {
          this.setState({
            error: true
          })

        } else {
          this.setState({
            error: false
          })
          results.forEach(item => {
            this.setState(prevState => ({
              recipes: [...prevState.recipes, item]
            }))
          });
        }
      })
  }

  handleFilteredRecipes = () => {
    const { ingredient, checkboxes } = this.state;

    api.filteredRecipes(ingredient, checkboxes)
      .then(res => res.json())
      .then(data => {
        const results = data.hits;

        if (!results.length) {
          this.setState({
            error: true
          })

        } else {
          this.setState({
            error: false
          })
          results.forEach(item => {
            this.setState(prevState => ({
              recipes: [...prevState.recipes, item]
            }))
          });
        }

      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { checkboxes, ingredient } = this.state;

    if (checkboxes.length) {
      this.handleFilteredRecipes(ingredient);
    } else {
      this.handleRecipes(ingredient);
    }


    this.setState({
      recipes: []
    })
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
    const { error, ingredient, recipes } = this.state;
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">
            <i className="fas fa-utensils"></i> Find A Recipe <i className="fas fa-hamburger"></i>
          </h1>
          <Search
            change={this.handleChange}
            value={ingredient}
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
            {error &&
              <p style={{ color: "red" }}>Unable to find recipe. Please try again.</p>}

            <Recipe
              items={recipes}
            />


          </div>
        </section>
      </div>
    );
  }
}

export default App;
