import React from "react";
import Results from "../components/Results.jsx";
import {getTopTracksForArtist} from "../services/music";
import SongResult from "../components/SongResult.jsx";

import "styles/artist.scss"

const formatName = artistName => artistName.split("+").join(" ")

const BackToSearchResults = () =>
{
    if(window.searchPage != undefined)
    {
        return (
            <div className="search-results-link-container">
                <a className="search-results-link" href={window.searchPage}> Back To Search Results</a>
            </div>
        )
    } else
    {
        return null
    }
}

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
            <BackToSearchResults/>
            <Results {...props} fetchItems={getTopTracksForArtist} itemMapper={itemMapper}/>
        </div>
    )
}