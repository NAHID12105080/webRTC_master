import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });

ws.on("connection", (socket) => {
  console.log("Connected");
  socket.on("message", (data) => {
    console.log(data);
    socket.send("Hello from server");
  });
});
