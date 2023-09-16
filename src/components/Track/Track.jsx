import React from "react";


export default function Track({song,addPlaylist}) {
    return (
    <div>
        {song.name} | {song.artist}  
        {addPlaylist && <button onClick={() => addPlaylist({name: song.name, artist: song.artist})}>Add</button>}
    </div>
    )
}