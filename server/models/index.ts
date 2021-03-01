import mongoose from "mongoose";
import User from "./User";
import Room from "./Room";
const MONGO_URI: any = process.env.MONGO_URI;
module.exports = () => {
  function connect(): void {
    let connection = mongoose.connect(
      MONGO_URI,
      {
        dbName: "ChattingApp",
      },
      (error) => {
        if (error) {
          console.log("몽고디비 연결에러");
        } else {
          console.log("몽고디비 연결성공!");
        }
      }
    );
  }
  connect();
  mongoose.connection.on("disconnected", connect);
  User;
  Room;
};
