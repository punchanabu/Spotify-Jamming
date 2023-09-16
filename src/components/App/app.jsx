import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import PlayList from "../PlayList/PlayList";

export default function App() {
    return (
        <div>
            <h1>Spotify Jamming</h1>
            <div>
                <SearchBar/>
                <SearchResult/>
            </div>
            <div>
                <PlayList/>
            </div>
        </div>
    )
}