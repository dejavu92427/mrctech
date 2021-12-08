import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/dataSlice";
import { FiSearch } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import "./search.css";

function Search() {
  const [searchTerm, setsearchTerm] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="search">
        <div
          className="search-btn"
          onClick={() => {
            dispatch(search(searchTerm));
          }}>
          <FiSearch className="search-btn-icon" />
        </div>
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(search(e.target.value));
            }
          }}
          placeholder="SEARCH..."
        />
        <div
          className="search-clear"
          onClick={() => {
            setsearchTerm("");
          }}>
          <AiFillCloseCircle className="search-clear-icon" />
        </div>
      </div>
    </>
  );
}

export default Search;
