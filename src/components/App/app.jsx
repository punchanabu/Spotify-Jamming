import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import PlayList from "../PlayList/PlayList";
import { useState } from "react";
const demo = [
    {name: "Johhny", artist: "Ben"},
    {name: "Love", artist: "DOM"},
    {name: "Big", artist: "Small"},
    {name: "Eddy", artist: "pun"}
]
export default function App() {
    const [playlistName,setPlaylistName] = useState("");
    const [playlistTrack,setPlaylistTrack] = useState([]);
    const addTrack = (track) => {
        if (!playlistTrack.some(t => t.name === track.name)) {
            setPlaylistTrack([...playlistTrack,track]);
        }
    };
    const deleteTrack = (track) => {
        setPlaylistTrack(playlistTrack.filter(t => t.name !== track.name));
    };
    const updateName = (name) => {
        setPlaylistName(name);
    }
    return (
        <div>
            <h1>Spotify Jamming</h1>
            <div>
                <SearchBar/>
                <SearchResult result = {demo} addTrack = {addTrack}/>
            </div>
            <div>
                <PlayList 
                    name = {playlistName}
                    updateName = {updateName}
                    trackList = {playlistTrack}
                    deleteTrack = {deleteTrack}/>
            </div>
        </div>
    )
}