import { Schema, model } from "mongoose";

const dogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
  },
  age: {
    type: Number,
    min: 0
  },
  weight: {
    type: Number,
    min: 0
  },
  ownerId: {
    type: String,
  }
});

export default model("Dog", dogSchema);
