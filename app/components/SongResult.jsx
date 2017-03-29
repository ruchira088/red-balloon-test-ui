import React from "react"
import "styles/song-result.scss"

export default ({name}) =>
(
    <div className="song-result">
        <div className="song-name">
            { name }
        </div>
    </div>
)