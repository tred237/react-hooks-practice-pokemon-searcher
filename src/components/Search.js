import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchData, setSearchData] = useState('')

  function handleSearchChange(e){
    setSearchData(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" name='search' value={searchData} onChange={handleSearchChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
