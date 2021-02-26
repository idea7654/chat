import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  email: string | undefined;
  password: string | undefined;
  admin: boolean;
}

const userSchema: mongoose.Schema = new mongoose.Schema({
  email: String,
  password: String,
  admin: { type: Boolean, default: false },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
