import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import PlayList from "../PlayList/PlayList";
import Spotify from "../../utils/Spotify";
import { useState ,useCallback} from "react";


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
                <SearchBar
                    handleSearch={handleSearch}
                    />
                <SearchResult result = {searchResult} addTrack = {addTrack}/>
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