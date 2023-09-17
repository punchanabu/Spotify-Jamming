import React from "react";
import Track from "../Track/Track";
import style from "./TrackList.css"
export default function TrackList({songs,addTrack,deleteTrack}) {
    return (
        <div className="tracklist">
            {songs && songs.map(song => <Track song = {song} addTrack = {addTrack} deleteTrack={deleteTrack}/>)}
        </div>
    )
}