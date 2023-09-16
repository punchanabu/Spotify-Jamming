import React from "react";
import TrackList from "../TrackList/TrackList";

export default function SearchResult({result,addTrack}) {
    return (
        <TrackList 
            songs = {result} 
            addTrack = {addTrack}/>
    )
}