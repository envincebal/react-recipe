import React from 'react';

const Recipe = props => {
  return (
    <div>
      {props.items.map((item, id) => (
        <div key={id} className="recipe">
          <div className="img-container">
            <img className="recipe-img" src={item.recipe.image} alt="" />
            <a href={item.recipe.url} rel='noreferrer noopener' target="_blank">
              <h3>{item.recipe.label}</h3>
            </a>
          </div>
          <div className="recipe-content">
            <div className="recipe-div-1">
              <div className="recipe-info">
                <h3><i className="fas fa-info-circle"></i> Information</h3>
                <hr />
                <p>Cook Time: {item.recipe.totalTime} minutes</p>
                <p>Calories: {Math.round(item.recipe.calories)}</p>
                <p>Servings: {item.recipe.yield}</p>
              </div>
              <div className="health-facts">
                <h3><i className="fas fa-heart"></i> Health Facts</h3>
                <hr />
                {
                  <ul>
                  {item.recipe.healthLabels.map((label, id) => (
                      <li key={id}>{label}</li>
                    ))}
                  </ul>
                }
              </div>
            </div>
            <div className="recipe-div-2">
              <div className="ingredients">
                <h3><i className="fas fa-clipboard-list"></i> Ingredients</h3>
                <hr />
                {
                  <ul>
                    {
                      item.recipe.ingredientLines.map((ingredient, id) => (
                      <li key={id}>{ingredient}</li>
                    ))
                    }
                  </ul>
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recipe;