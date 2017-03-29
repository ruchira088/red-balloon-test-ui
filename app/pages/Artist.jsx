import React from "react"
import {getTopTracksForArtist} from "../services/music"
import {resultMapper} from "../helpers/results"
import SongResult from "../components/SongResult.jsx"
import Pagination from "../components/Pagination.jsx"

export default React.createClass(
{
    getInitialState()
    {
        return {
            tracks: []
        }
    },

    componentDidMount()
    {
        const {page} = this.props.location.query
        this.fetchTracks(page)
    },

    componentWillReceiveProps(newProps)
    {
        const {page} = this.props.location.query
        const newPage = newProps.location.query.page

        if(newPage != page)
        {
            this.fetchTracks(newPage)
        }
    },

    fetchTracks(page = 1)
    {
        const {params, location} = this.props
        const {limit = 5} = location.query

        getTopTracksForArtist(params.artist, page, limit)
            .then(results =>
            {
                this.setState({tracks: resultMapper(results)})
            })
    },

    render()
    {
        const {tracks} = this.state
        const {location} = this.props

        const songTracks = tracks.map(({name, imageUrl}, index) =>
            <SongResult name={name} imageUrl={imageUrl} key={index}/>
        )

        return (
            <div className="artist">
                <Pagination location={location}>
                    { songTracks }
                </Pagination>
            </div>
        )
    }

})