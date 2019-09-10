import React from 'react';

const Search = props => {
  return (
    <form onSubmit={props.submit}>
      <div className="controls">
        <input className="input-field" type="text" placeholder="Enter Ingredients" value={props.value} onChange={props.change} />
        <button className="search-button">Search</button>
      </div>
    </form>
  );
}

export default Search;