import mongoose from "mongoose";
import autoIncrease from "mongoose-auto-increment";
interface IRoom extends mongoose.Document {
  id: number;
  password: string | undefined;
  message: [];
  users: [];
}

const connection: any = mongoose.createConnection(process.env.MONGO_URI as any);
autoIncrease.initialize(connection);

const roomSchema: mongoose.Schema = new mongoose.Schema(
  {
    id: Number,
    users: {
      type: Array,
      default: [],
    },
    password: String,
    message: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

roomSchema.plugin(autoIncrease.plugin, {
  model: "room",
  field: "id",
  startAt: 1,
  increment: 1,
});
connection.model("room", roomSchema);
const Room = mongoose.model<IRoom>("Room", roomSchema);

export default Room;
