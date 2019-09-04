import React from 'react';

const Search = props => {
  return (
    <form action="">
      <div className="controls">
        <input className="input-field" type="text" placeholder="Enter Ingredients" />
        <button className="search-button">Search</button>
      </div>

    </form>
  );
}

export default Search;