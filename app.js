const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
const bodyParser = require("body-parser")
//const http = require("http")
const userRouter = require("./routes/usersRoute")

require("dotenv/config")

dbConnect(process.env.MONGO_URL)

app.use(bodyParser.json())

app.use("/",userRouter)







const PORT = process.env.PORT || 7000
//const server = http.createServer(app)
//server.listen(PORT, console.log("server i up"))
app.listen(PORT,() => {
    console.log(`server is listening ${PORT}`)
})








