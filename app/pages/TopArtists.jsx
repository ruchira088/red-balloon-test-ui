import React from "react"
import {getTopArtists} from "../services/music"
import {resultMapper} from "../helpers/results"
import ArtistResult from "../components/ArtistResult.jsx"
import Pagination from "../components/Pagination.jsx"

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
        const {page} = this.props.location.query
        this.fetchTopArtists(page)
    },

    componentWillReceiveProps(newProps)
    {
        const {page} = this.props.location.query
        const newPage = newProps.location.query.page

        if(newPage != page)
        {
            this.fetchTopArtists(newPage)
        }
    },

    fetchTopArtists(page = 1)
    {
        const {params, location} = this.props
        const {limit = 5} = location.query

        getTopArtists(params.country, page, limit)
            .then(results =>
            {
                this.setState({searchResults: resultMapper(results)})
            })
    },

    render()
    {
        const {searchResults} = this.state
        const {location} = this.props

        const results = searchResults.map(({name, imageUrl}, index) =>
            <ArtistResult name={name} imageUrl={imageUrl} key={index}/>
        )

        return (
            <div className="top-artists">
                <Pagination location={location}>
                    { results }
                </Pagination>
            </div>
        )
    }
})