import axios from "axios"
import {services} from "../../config.json"
import {takeLast} from "../helpers/object"

const {host, port, baseUrl} = services.music

const performQuery = (path, page, limit) =>
    axios.get(`${host}:${port}/${baseUrl}/${path}?page=${page}&limit=${limit}`)
        .then(({data}) => data)

export const getTopArtists = (country, page, limit) =>
    performQuery(`country/${country}`, page, limit)
        .then(data => takeLast(data.topartists.artist, limit))

export const getTopTracksForArtist = (artist, page, limit) =>
    performQuery(`artist/${artist}`, page, limit)
        .then(data => takeLast(data.toptracks.track, limit))
