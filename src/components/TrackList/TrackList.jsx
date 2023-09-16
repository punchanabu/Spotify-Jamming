import React from "react";
import Track from "../Track/Track";
export default function TrackList({songs,addTrack,deleteTrack}) {
    return (
        <div>
            {songs && songs.map(song => <Track song = {song} addTrack = {addTrack} deleteTrack={deleteTrack}/>)}
        </div>
    )
}