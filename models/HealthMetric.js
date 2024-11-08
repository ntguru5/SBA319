import { Schema, model } from "mongoose";

const healthMetricSchema = new Schema({
  dogId: {
    type: Schema.Types.ObjectId,
    ref: "Dog",
    required: true,
    index: true // Indexing dogId to optimize lookups when querying by specific dog
  },
  metricType: { // weight, exercise, sleep, etc
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true,
    min: [0, 'Value must be greater than or equal to 0'], // Value must be greater than or equal to 0
  },
  time: {
    type: Date,
    default: Date.now,
    index: true // Indexing date for faster retrieval of recent health data
  },
  notes: { // lethargic, increased water intake, excited, etc
    type: String,
  }
});

export default model("HealthMetric", healthMetricSchema);
