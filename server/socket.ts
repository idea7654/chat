import * as socketIO from "socket.io";

function socketMiddleware(server: any) {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket: socketIO.Socket) => {
    console.log("연결 성공");
  });
}

export default socketMiddleware;
