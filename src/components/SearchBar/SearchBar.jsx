import React from "react";
import { useState } from "react";
import style from "./SearchBar.css"
export default function SearchBar({handleSearch}) {
    const [term,setTerm] = useState("");
    function updateTerm(e) {
        setTerm(e.target.value);
    }
    return (
        <div className="flex-3">
            <input type = "text" onChange={updateTerm} value = {term} className = "search-bar"></input>
            <button onClick={() => handleSearch(term)} className="button">Search</button>
        </div>
    )
}