import React from "react";

const SearchBar = () => {
  return (
    <div className="search-form">
      <div className="search-box">
        <span className="search-btn">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="search-txt"
          placeholder="군산 월명동 빵집"
        />
      </div>
    </div>
  );
};

export default SearchBar;
