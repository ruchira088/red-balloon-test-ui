import React from "react";
import Results from "../components/Results.jsx";
import {getTopTracksForArtist} from "../services/music";
import SongResult from "../components/SongResult.jsx";

export default props =>
{
    const itemMapper = ({name, imageUrl}, index) => (
        <SongResult name={name} imageUrl={imageUrl} key={index}/>
    )

    return (
        <Results {...props} fetchItems={getTopTracksForArtist} itemMapper={itemMapper}/>
    )
}