import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import PlayList from "../PlayList/PlayList";
import Spotify from "../../utils/Spotify";
import { useState ,useCallback} from "react";
import app from "./app.css"

export default function App() {
    const [searchResult,setSearchResult] = useState([
    ]);
    const [playlistName,setPlaylistName] = useState("");
    const [playlistTrack,setPlaylistTrack] = useState([]);
    const TrackUris = playlistTrack.map(track => track.uri);
    const handleSearch = useCallback((term) => {
        Spotify.search(term).then(response => {
            console.log("API response: ", response);  // Log the API response
            setSearchResult(response);
        });
    }, []);  
    
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
        Spotify.savePlaylist(playlistName,TrackUris);
        
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
        <div className="bg-grey">
            <div className="flex">
                <i class="fa-solid fa-chart-simple icon"></i>
                <h1 className = "title">Jamming</h1>
            </div>
            <p className="description">tools for crafting the perfect Spotify playlist.</p>
            <section className="flex-2">
                <div className = "block-1">
                    <SearchBar
                        handleSearch={handleSearch}
                        />
                    <SearchResult result = {searchResult} addTrack = {addTrack}/>
                </div>
                <div className="block-2">
                    <PlayList 
                        name = {playlistName}
                        updateName = {updateName}
                        trackList = {playlistTrack}
                        deleteTrack = {deleteTrack}
                        handleSave = {handleSaveToSpotify}/>
                </div>
            </section>
        </div>
    )
}