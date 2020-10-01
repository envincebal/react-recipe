import React from 'react';
import Recipe from './Recipe';

const RecipeList = props => {

  return props.recipesList.map((response, id) => {
      
    return <Recipe 
      key={id}
      recipe={response.recipe}
    />;
  });
}


export default RecipeList;