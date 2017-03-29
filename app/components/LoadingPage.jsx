import React from "react"
import loadingImage from "assets/rolling.svg"

import "styles/loading-page.scss"

export default () =>
(
    <div className="loading-page">
        <img className="loading-image" src={loadingImage} alt="Loading image"/>
        <div className="loading-text">
            Loading
        </div>
    </div>
)