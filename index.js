const express = require('express')
const app = express()
const socketIo = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const cors = require('cors')

app.use(cors())

const router = require("./routes")
const {initializeSocket} = require('./controllers')

app.use(express.json())
app.use("/api", router)

const io = socketIo(server, { cors: { origin: '*' } })

const PORT = 8200;
server.listen(PORT, () => {console.log("Server is running on port " + PORT)});

initializeSocket(io);