import React from "react";
import Results from "../components/Results.jsx";
import {getTopTracksForArtist} from "../services/music";
import SongResult from "../components/SongResult.jsx";

import "styles/artist.scss"

const formatName = artistName => artistName.split("+").join(" ")

export default props =>
{
    const itemMapper = ({name}, index) => (
        <SongResult name={name} key={index}/>
    )

    const artistName = formatName(props.params.primaryTerm)

    return (
        <div className="artist">
            <div className="artist-title">
                { artistName }
            </div>
            <Results {...props} fetchItems={getTopTracksForArtist} itemMapper={itemMapper}/>
        </div>
    )
}