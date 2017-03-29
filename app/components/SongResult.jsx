import React from "react"

export default ({name, imageUrl}) =>
(
    <div className="song-result">
        <div className="song-name">
            { name }
        </div>
        <div className="album-art">
            <img src={imageUrl} alt="Album art"/>
        </div>
    </div>
)