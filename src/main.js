const express = require("express");
const groupRouter = require("./router/group.router");
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");

const server = http.createServer(app);


const corsOptions = {
  origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, 
};

app.use(cors(corsOptions));


const io = new Server(server, {
  cors: corsOptions,
});

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.use("/groups", groupRouter);


io.on("connection", (socket) => {
  console.log(socket.id);


 

    socket.on("new user", usernameAndId => {
      socket.on("send message", data => {
        console.log(data);
        socket.broadcast.emit("receive message", {
          username: usernameAndId.username,
          message: data.message,
          id: usernameAndId.id,
        });
      })
    })
    

});

server.listen(1001);
