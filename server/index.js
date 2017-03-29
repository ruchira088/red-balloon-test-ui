const express = require("express")
const http = require("http")
const path = require("path")

const {server} = require("../config.json")
const publicFolderPath = path.join(__dirname, "../", "public")

const app = express()
app.use(express.static(publicFolderPath))

app.get(/^(\/country|\/artist)/, (request, response) =>
{
    response.sendFile(path.join(publicFolderPath, "index.html"))
})

http.createServer(app).listen(server.httpPort, () =>
{
    console.log(`The server is listening on port: ${server.httpPort}`)
})