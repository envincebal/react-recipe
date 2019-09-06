import React from 'react';

const Recipe = props => {
  return (
    <div className="recipe">
      <div className="img-container">
        <a href="">
          <img className="recipe-img" src="" alt="" />
          <h3></h3>
        </a>
      </div>
      <div className="recipe-content">
        <div className="recipe-div-1">
          <div className="recipe-info">
            <h3><i class="fas fa-info-circle"></i> Information
            </h3>
            <hr />
          </div>
          <div className="health-facts">
            <h3><i class="fas fa-heart"></i> Health Facts
            </h3>
            <hr />
          </div>
        </div>
        <div className="recipe-div-2">
          <div className="ingredients">
            <h3><i class="fas fa-clipboard-list"></i> Ingredients
            </h3>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;