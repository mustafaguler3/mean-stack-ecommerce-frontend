import http from "http"
import app from "./app/app"

const PORT = process.env.PORT || 7000
const server = http.createServer(app)
server.listen(PORT, console.log("server i up"))