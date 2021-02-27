import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  email: string | undefined;
  password: string | undefined;
  friends: string[] | [];
  nickname: string;
}

const userSchema: mongoose.Schema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  friends: {
    type: Array,
    default: [],
  },
  nickname: String,
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
