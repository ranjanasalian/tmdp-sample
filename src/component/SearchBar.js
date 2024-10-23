import { useState } from "react";

export default function SearchBar({ placeholder, onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSearchClick() {
    onSearch(searchValue);
  }

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleChange}
        className="search-input"
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}
