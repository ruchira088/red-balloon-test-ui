import React from "react"
import {getTopArtists} from "../services/music"
import {resultMapper} from "../helpers/results"
import ArtistResult from "../components/ArtistResult.jsx"

export default React.createClass(
{
    getInitialState()
    {
        return {
            searchResults: []
        }
    },

    componentDidMount()
    {
        const {country} = this.props.params

        getTopArtists(country)
            .then(results =>
            {
                this.setState({searchResults: resultMapper(results)})
            })
    },

    render()
    {
        const {searchResults} = this.state

        const results = searchResults.map(({name, imageUrl}, index) =>
            <ArtistResult name={name} imageUrl={imageUrl} key={index}/>
        )

        return (
            <div>
                { results }
            </div>
        )
    }
})