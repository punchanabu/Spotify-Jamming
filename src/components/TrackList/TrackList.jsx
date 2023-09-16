import React from "react";
import Track from "../Track/Track";
export default function TrackList({songs,addPlaylist}) {
    return (
        <div>
            {songs && songs.map(song => <Track song = {song} addPlaylist = {addPlaylist}/>)}
        </div>
    )
}