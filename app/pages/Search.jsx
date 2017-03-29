import React from "react"
import {browserHistory} from "react-router"

import "styles/search.scss"

export default React.createClass(
{
    getInitialState()
    {
        return {
            searchText: ""
        }
    },

    onSearchButtonClick(event)
    {
        event.preventDefault()

        const {searchText} = this.state
        browserHistory.push(`/country/${searchText}`)
    },

    onTextChange({target})
    {
        this.setState({searchText: target.value})
    },

    render()
    {
        const {searchText} = this.state

        return (
            <div className="search">
                <div className="search-header">
                    Search by country
                </div>
                <div className="search-body">
                    <div className="search-input">
                        <input className="input-field" value={searchText} onChange={this.onTextChange}/>
                    </div>
                </div>
                <div className="search-footer">
                    <button className="search-button" onClick={this.onSearchButtonClick}>
                        Search
                    </button>
                </div>
            </div>
        )
    }
})