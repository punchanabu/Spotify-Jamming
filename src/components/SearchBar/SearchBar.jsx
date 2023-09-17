import React from "react";
import { useState } from "react";
export default function SearchBar({handleSearch}) {
    const [term,setTerm] = useState("");
    function updateTerm(e) {
        setTerm(e.target.value);
    }
    return (
        <div>
            <input type = "text" onChange={updateTerm} value = {term}></input>
            <button onClick={() => handleSearch(term)}>Search</button>
        </div>
    )
}