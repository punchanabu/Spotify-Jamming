import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import PlayList from "../PlayList/PlayList";
import { useState } from "react";
const demo = [
    {name: "Queen Songs", artist: "Judah & the Lion", uri: "spotify:track:27fpPlAMJc9IM6adpi46Nc"},
    {name: "Quarter Life Crisis", artist: "Judah & the Lion", uri: "spotify:track:6yfCm7LVFXxRMItHAlMySC"},
    {name: "Why Did You Run?", artist: "Judah & the Lion", uri: "spotify:track:4ascbpJ8eelgihjwUnmgwY"},
]

export default function App() {
    const [playlistName,setPlaylistName] = useState("");
    const [playlistTrack,setPlaylistTrack] = useState([]);
    const TrackUris = playlistTrack.map(track => track.uri);
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
    const savePlaylistToSpotify = () => {
        console.log(TrackUris);
    }
    const resetPlaylist = () => {
        setPlaylistName("");
        setPlaylistTrack([]);
    }
    const handleSaveToSpotify = () => {
        savePlaylistToSpotify();
        resetPlaylist();
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
                    deleteTrack = {deleteTrack}
                    handleSave = {handleSaveToSpotify}/>
            </div>
        </div>
    )
}