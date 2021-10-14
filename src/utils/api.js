const apiID = `a23e2e90`;
const apiKey = `6220bdba80c64c71f7674f546eef3872`;

module.exports = {
  getRecipe(searchTerm) {

    const apiURL = `https://api.edamam.com/search?q=${searchTerm}&app_id=${apiID}&app_key=${
  apiKey}&from=0&to=20`;

    const response = fetch(apiURL, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response;
  },
  filteredRecipes(searchTerm, filters) {
    let filterTerm = "";

    filters.forEach(filter => {
      filterTerm += `&diet=${filter}`
    });

    const apiURL = `https://api.edamam.com/search?q=${searchTerm}&app_id=${apiID}&app_key=${
  apiKey}&from=0&to=20${filterTerm}`;

    const response = fetch(apiURL, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response;
  }
}