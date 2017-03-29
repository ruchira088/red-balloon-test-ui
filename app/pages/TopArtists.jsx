import React from "react";
import Results from "../components/Results.jsx";
import {getTopArtists} from "../services/music";
import ArtistResult from "../components/ArtistResult.jsx";

export default props =>
{
    const itemMapper = ({name, imageUrl}, index) => (
            <ArtistResult name={name} imageUrl={imageUrl} key={index}/>
    )

    return (
        <Results {...props} fetchItems={getTopArtists} itemMapper={itemMapper}/>
    )
}