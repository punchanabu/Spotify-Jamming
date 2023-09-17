import React from "react";

import style from "./Track.css"
export default function Track({song,addTrack,deleteTrack}) {
    return (
    <div className = "track">
        <div><i class="fa-solid fa-music icon-2"></i>{song.name}</div> 
        <div className = "detail">{song.artist} <br/>{song.album}</div>
        <div>
            {addTrack && <button onClick={() => addTrack(song)} class = "add-button" >Add to playlist</button>}
            {deleteTrack && <button onClick={() => deleteTrack(song)} class = "del-button">Delete</button>}
        </div>
    </div>
    )
}