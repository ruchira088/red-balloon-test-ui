
export const resultMapper = results =>
    results.map(({name, image}) =>
    {
        const artistImage = image.find(({size}) => size == "large")
        return {
            name,
            imageUrl: artistImage["#text"]
        }
    })