import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
  },
  gender: {
    type: String,
  },
});

export default mongoose.model("Users", userSchema);
