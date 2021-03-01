import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  email: string | undefined;
  password: string | undefined;
  friends: string[] | [];
  nickname: string;
  image: string | undefined;
  message: any;
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
  image: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "상태메시지가 설정되지 않았습니다.",
  },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
