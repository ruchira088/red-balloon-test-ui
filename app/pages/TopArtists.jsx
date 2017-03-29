import React from "react";
import Results from "../components/Results.jsx";
import {getTopArtists} from "../services/music";
import ArtistResult from "../components/ArtistResult.jsx";

export default props => {
    const itemMapper = ({name, image}, index) =>
    {
        const artistImage = image.find(({size}) => size == "large")

        return (
            <ArtistResult name={name} imageUrl={artistImage["#text"]} key={index}/>
        )
    }

    return (
        <Results {...props} fetchItems={getTopArtists} itemMapper={itemMapper}/>
    )
}