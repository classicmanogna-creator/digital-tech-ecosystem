import { useState } from "react";
import "./searchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/search-img.png"
      alt="search"
      className="img-1"
    />
    <input
      className="search"
      placeholder="Search products..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
      }}
    />
    </div>
  );
};

export default SearchBar;