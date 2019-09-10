import React, { Component } from 'react';
import Search from "./Search";
import CheckBoxes from "./CheckBoxes";
import Recipe from "./Recipe";
import '../styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      ingredient: ""
    }
  }

  handleChange = (e) => {
    this.setState({ ingredient: e.target.value })
  }

  handleRecipes = (search) => {
    const apiID = `a23e2e90`;
    const apiKey = `6220bdba80c64c71f7674f546eef3872`;
    const apiURL = `https://api.edamam.com/search?q=${search}&app_id=${apiID}&app_key=${
      apiKey}&from=0&to=20`;

    fetch(apiURL)
      .then(res => res.json())
      .then(data => {

        const hit = data.hits
        hit.forEach(recipe => {
          this.setState(prevState => ({
            recipes: prevState.recipes.concat(recipe)
          }))
        });
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleRecipes(this.state.ingredient);
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
            <CheckBoxes />
          </div>
        </header>
        <section>
          <div className="recipe-container">
            <Recipe
            items={this.state.recipes}
             />
            {console.log(this.state.recipes)}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
