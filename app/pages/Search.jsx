import React from "react"
import Select from "react-select"
import countries from "isoc"
import {browserHistory} from "react-router"

import "react-select/dist/react-select.css";
import "styles/search.scss"

export default React.createClass(
{
    getInitialState()
    {
        return {
            selected: null,
            options: []
        }
    },

    componentDidMount()
    {
        const options = countries.map(({name: {short}}) => ({label: short, value: short.toLowerCase()}))
        this.setState({options})
    },

    onSearchButtonClick(event)
    {
        event.preventDefault()

        const {selected} = this.state

        if(selected != null)
        {
            browserHistory.push(`/country/${selected.value}`)
        } else
        {
            alert("Please select a valid country")
        }
    },

    onChange(selected)
    {
        if(Array.isArray(selected))
        {
            this.setState({selected: null})
        } else
        {
            this.setState({selected})
        }
    },

    render()
    {
        const {selected, options} = this.state

        return (
            <div className="search">
                <div className="search-header">
                    Search by country
                </div>
                <div className="search-body">
                    <Select
                        className="search-input"
                        value={selected}
                        options={options}
                        onChange={this.onChange}
                        placeholder="Enter country"
                    />
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