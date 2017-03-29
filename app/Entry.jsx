import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, browserHistory} from "react-router"
import Search from "./pages/Search.jsx"
import TopArtists from "./pages/TopArtists.jsx"
import Artist from "./pages/Artist.jsx"
import PageContainer from "./components/PageContainer.jsx"

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={PageContainer}>
            <Route path="/" component={Search}/>
            <Route path="/country/:country" component={TopArtists}/>
            <Route path="/artist/:artist" component={Artist}/>
        </Route>
    </Router>,
    document.getElementById("app")
)