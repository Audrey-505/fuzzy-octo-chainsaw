const express = require("express")
const path = require('path')
const db = require('./config/connection')
const routes = require('./routes/')
const app = express();

const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(routes)

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build/')));
  }

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`)

  socket.on('join_room', (data) => {
    socket.join(data)
  })

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('obtained_message', data)
  })
})

// server.listen(PORT, () => {
//   console.log(`🌍 Now listening on localhost:${PORT}`);
// });

db.once('open', () => {
    server.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
})


//latest version