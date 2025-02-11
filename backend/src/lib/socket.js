import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

export function getReceiverSocketId(userId) {
  return userShocketMap[userId];
}

// Store online users
const userShocketMap={}

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  const userId = socket.handshake.query.userId;
  if(userId) userShocketMap[userId]=socket.id

  //io.emit() to send events to all connected users
  io.emit("getOnlineUsers", Object.keys(userShocketMap));

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    delete userShocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userShocketMap));
  });
});

export { io, app, server };
