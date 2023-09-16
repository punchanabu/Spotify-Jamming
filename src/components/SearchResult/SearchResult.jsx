import React from "react";
import TrackList from "../TrackList/TrackList";

export default function SearchResult({result,addPlaylist}) {
    return (
        <TrackList 
            songs = {result} 
            addPlaylist = {addPlaylist}/>
    )
}