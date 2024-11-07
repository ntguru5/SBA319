import { Schema, model } from "mongoose";

const bathroomLogSchema = new Schema({
  dogId: {
    type: Schema.Types.ObjectId,
    ref: "Dog",
    required: true
  },
  type: {
    type: String,
    enum: ['pee', 'poop'],
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String,
  },
  notes: {
    type: String,
  }
});

export default model("BathroomLog", bathroomLogSchema);
