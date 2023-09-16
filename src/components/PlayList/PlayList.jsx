import React from "react";
import TrackList from "../TrackList/TrackList";
import { useState } from "react";
export default function PlayList({name,trackList,deleteTrack,updateName}) {
    return (
        <div>
            <input type = "text" value = {name} onChange={(e) => updateName(e.target.value)}/>
            <TrackList songs = {trackList} deleteTrack = {deleteTrack}/>
            <button>Save to Spotify</button>
        </div>
    )
}