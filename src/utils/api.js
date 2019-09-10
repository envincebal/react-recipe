const getRecipe = searchTerm => {
  const apiID = `a23e2e90`;
  const apiKey = `6220bdba80c64c71f7674f546eef3872`;
  const apiURL = `https://api.edamam.com/search?q=${searchTerm}&app_id=${apiID}&app_key=${
  apiKey}&from=0&to=20`;
        let recipes = [];
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {

      const hit = data.hits
      hit.forEach(recipe => {
        recipes.push(recipe);
      });


    })
 return recipes;
}


export default getRecipe;