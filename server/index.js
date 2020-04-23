const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.port || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("a user is connected!!!");

  socket.on("join", ({ name, room }, callback) => {
    const error = true;

    if (error) {
      callback({ error: "error" });
    }
  });

  socket.on("disconnected", () => {
    console.log("user disconnected!");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on ${PORT}`));
