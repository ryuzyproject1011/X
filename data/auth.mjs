import { useVirtualId } from "../db/database.mjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userid: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    url: String,
  },
  { versionKey: false },
);

useVirtualId(userSchema);
const User = mongoose.model("User", userSchema);

export async function createUser(user) {
  return new User(user).save().then((data) => data.id);
}

export async function findByUserid(userid) {
  return User.findOne({ userid });
}

export async function findById(id) {
  return User.findById(id);
}
