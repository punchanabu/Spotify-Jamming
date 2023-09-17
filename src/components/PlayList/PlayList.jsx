import React from "react";
import TrackList from "../TrackList/TrackList";
import { useState } from "react";
import playlist from './PlayList.css'
export default function PlayList({name,trackList,deleteTrack,updateName,handleSave}) {
    return (
        <div class = "playlist">
            <p>Playlist Name</p>
            <input type = "text" value = {name} onChange={(e) => updateName(e.target.value)} className="input"/>
            <TrackList songs = {trackList} deleteTrack = {deleteTrack}/>
            <button onClick={handleSave} className="button wide">Save to Spotify</button>
        </div>
    )
}