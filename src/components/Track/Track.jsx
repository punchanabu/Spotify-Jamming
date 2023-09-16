import React from "react";


export default function Track({song,addTrack,deleteTrack}) {
    return (
    <div>
        {song.name} | {song.artist}  
        {addTrack && <button onClick={() => addTrack(song)}>Add</button>}
        {deleteTrack && <button onClick={() => deleteTrack(song)}>Delete</button>}
    </div>
    )
}