import * as socketIO from "socket.io";
import Room from "./models/Room";
function socketMiddleware(server: any) {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket: socketIO.Socket) => {
    socket.on("entryRoom", async (data: any) => {
      await socket.join(data);
      await Room.findOne({
        id: data,
      }).then((doc: any) => {
        io.to(data).emit("entryRoom", doc);
      });
    });
    socket.on("send message", (data: any) => {
      Room.findOne({
        id: data.id,
      }).then((doc: any) => {
        doc.message.push({
          name: data.name,
          message: data.message,
          createdAt: Date.now(),
        });
        doc.save();
      });
      io.to(data.id).emit("send message", {
        name: data.name,
        message: data.message,
      });
    });
  });
}

export default socketMiddleware;
