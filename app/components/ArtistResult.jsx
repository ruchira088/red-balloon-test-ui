import React from "react"
import {browserHistory} from "react-router"

import "styles/artist-result.scss"

const artistOnClick = name => event =>
{
    event.preventDefault()
    browserHistory.push(`/artist/${name.split(" ").join("+")}`)
}

export default ({name, imageUrl}) =>
(
    <div className="artist-result" onClick={artistOnClick(name)}>
        <div className="artist-name">
            { name }
        </div>
        <div className="artist-image">
            <img src={imageUrl} alt="Artist image"/>
        </div>
    </div>
)