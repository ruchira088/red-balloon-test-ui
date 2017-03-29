import React from "react"
import {Router, Route, browserHistory} from "react-router"
import Home from "./pages/Home.jsx"
import SearchResults from "./pages/SearchResults.jsx"
import Artist from "./pages/Artist.jsx"

export default () =>
(
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/country/:country" component={SearchResults}/>
        <Route path="/artist/:artist" component={Artist}/>
    </Router>
)