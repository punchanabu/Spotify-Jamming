import React from "react";
import TrackList from "../TrackList/TrackList";
import { useState } from "react";
export default function PlayList({name,trackList,deleteTrack}) {
    return (
        <div>
            <input />
            <TrackList songs = {trackList} deleteTrack = {deleteTrack}/>
            <button>Save to Spotify</button>
        </div>
    )
}