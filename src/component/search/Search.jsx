import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import "./search.css";

function Search() {
  const [searchTerm, setsearchTerm] = useState("");
  return (
    <>
      <div className="search">
        <label className="search-btn" htmlFor="search-btn">
          <FiSearch Name="search-btn" />
        </label>

        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setsearchTerm(e.target.value);
            console.log(searchTerm);
          }}
          placeholder="SEARCH..."
        />
        <label className="search-clear" htmlFor="search-clear">
          <AiFillCloseCircle
            name="search-clear"
            onClick={() => {
              setsearchTerm("");
            }}
          />
        </label>
      </div>
    </>
  );
}

export default Search;
