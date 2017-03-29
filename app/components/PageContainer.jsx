import React from "react"

import redBalloonLogo from "assets/redBalloonLogo.svg"
import "styles/page-container.scss"

const PageHeader = () => (
    <div className="page-header">
        <img className="redBalloon-logo" src={redBalloonLogo} alt="RedBalloon logo"/>
        <div className="text-title">Technical Test</div>
    </div>
)

export default ({children}) =>
(
    <div className="page-container">
        <PageHeader/>
        <div className="page-body">
            { children }
        </div>
    </div>
)