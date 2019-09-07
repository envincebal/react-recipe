const apiID = `a23e2e90`;
const apiKey = `6220bdba80c64c71f7674f546eef3872`;

const getRecipe = searchTerm => {
  const apiURL = `https://api.edamam.com/search?q=${searchTerm}&app_id=${apiID}&app_key=${
  apiKey}&from=0&to=20`;

  fetch(apiURL)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
}


export default getRecipe;