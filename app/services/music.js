import axios from "axios"

const performQuery = (path, page, limit) =>
    axios.get(`http://localhost:8000/last-fm/${path}?page=${page}&limit=${limit}`)
        .then(({data}) => data)

export const getTopArtists = (country, page = 1, limit = 5) =>
    performQuery(`country/${country}`, page, limit)
        .then(data => data.topartists.artist)

export const getTopTracksForArtist = (artist, page = 1, limit = 5) =>
    performQuery(`artist/${artist}`, page, limit)
        .then(data => data.toptracks.track)
