import React from "react"
import {getTopTracksForArtist} from "../services/music"
import {resultMapper} from "../helpers/results"
import SongResult from "../components/SongResult.jsx"

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
        const {artist} = this.props.params

        getTopTracksForArtist(artist)
            .then(results =>
            {
                this.setState({tracks: resultMapper(results)})
            })
    },

    render()
    {
        const {tracks} = this.state

        const songTracks = tracks.map(({name, imageUrl}, index) =>
            <SongResult name={name} imageUrl={imageUrl} key={index}/>
        )

        return (
            <div className="artist">
                { songTracks }
            </div>
        )
    }

})