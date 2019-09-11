    const apiID = `a23e2e90`;
    const apiKey = `6220bdba80c64c71f7674f546eef3872`;

module.exports = {
  getRecipe(searchTerm) {

    const apiURL = `https://api.edamam.com/search?q=${searchTerm}&app_id=${apiID}&app_key=${
  apiKey}&from=0&to=20`;

  return fetch(apiURL, {
    method: "GET",
    headers:{
      'Content-Type': 'application/json'
    }
  })
 
  },
  filteredRecipes(searchTerm, filters){
    const apiURL = `https://api.edamam.com/search?q=${searchTerm}&app_id=${apiID}&app_key=${
  apiKey}&from=0&to=20${filters}`;

    return fetch(apiURL, {
      method: "GET",
      headers:{
        'Content-Type': 'application/json'
      }
    })
  }
}




