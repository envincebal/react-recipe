import React from 'react';

const Search = props => {
  const {submit, change} = props;
  return (
    <form onSubmit={submit}>
      <div className="controls">
        <input className="input-field" type="text" placeholder="Enter Ingredients" value={props.value} onChange={change} />
        <button className="search-button">Search</button>
      </div>
    </form>
  );
}

export default Search;