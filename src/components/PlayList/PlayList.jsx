import React from "react";
import TrackList from "../TrackList/TrackList";
import { useState } from "react";
export default function PlayList({name,trackList}) {
    return (
        <div>
            <input />
            <TrackList songs = {trackList}/>
            <button>Save to Spotify</button>
        </div>
    )
}