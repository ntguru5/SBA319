import { Schema, model } from "mongoose";

const healthMetricSchema = new Schema({
  dogId: {
    type: Schema.Types.ObjectId,
    ref: "Dog",
    required: true
  },
  metricType: { // weight, exercise, sleep, etc
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true,
    min: 0
  },
  time: {
    type: Date,
    default: Date.now
  },
  notes: { // lethargic, increased water intake, excited, etc
    type: String,
  }
});

export default model("HealthMetric", healthMetricSchema);
