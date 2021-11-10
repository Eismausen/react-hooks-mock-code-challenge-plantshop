import React from "react";

function Search({searchBy, changeHandler}) {
  

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchBy}
        onChange={changeHandler}
      />
    </div>
  );
}

export default Search;
