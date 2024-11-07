import 'dotenv/config';
import mongoose from 'mongoose';

// Connect to MongoDB using the connection URI from environment variables
await mongoose.connect(process.env.ATLAS_URI);

// Import your models
import Dog from '../models/Dog.js';
import BathroomLog from '../models/BathroomLog.js';
import HealthMetric from '../models/HealthMetric.js';

try {
  // Sample data for `Dog` model
  const dogs = [
    {
      name: 'Buddy',
      breed: 'Golden Retriever',
      age: 3,
      weight: 30,
      ownerId: 'owner123'
    },
    {
      name: 'Sparky',
      breed: 'Chihuahua',
      age: 16,
      weight: 12,
      ownerId: 'owner456'
    },
    {
      name: 'Bella',
      breed: 'Poodle',
      age: 2,
      weight: 10,
      ownerId: 'owner789'
    },
  ];

  // Clear existing data
  await Dog.deleteMany({});
  await BathroomLog.deleteMany({});
  await HealthMetric.deleteMany({});

  // Create new dogs
  const createdDogs = await Dog.create(dogs);
  console.log('Dogs: ', createdDogs);

  // Sample data for `BathroomLog` model
  const bathroomLogs = [
    {
      dogId: createdDogs[0]._id,
      type: 'pee',
      time: new Date('2024-11-01T08:30:00'),
      location: 'backyard',
      notes: 'Normal urination'
    },
    {
      dogId: createdDogs[1]._id,
      type: 'poop',
      time: new Date('2024-11-02T07:45:00'),
      location: 'park',
      notes: 'Solid, healthy stool'
    },
    {
      dogId: createdDogs[2]._id,
      type: 'pee',
      time: new Date('2024-11-03T09:15:00'),
      location: 'living room',
      notes: 'Accident indoors'
    },
  ];

  // Create new bathroom logs
  const createdBathroomLogs = await BathroomLog.create(bathroomLogs);
  console.log('Bathroom Logs: ', createdBathroomLogs);

  // Sample data for `HealthMetric` model
  const healthMetrics = [
    {
      dogId: createdDogs[0]._id,
      metricType: 'weight',
      value: 30.5,
      time: new Date('2024-11-01T09:00:00'),
      notes: 'Steady weight'
    },
    {
      dogId: createdDogs[1]._id,
      metricType: 'temperature',
      value: 101.5,
      time: new Date('2024-11-02T10:00:00'),
      notes: 'Slightly elevated temperature'
    },
    {
      dogId: createdDogs[2]._id,
      metricType: 'heart rate',
      value: 110,
      time: new Date('2024-11-03T11:30:00'),
      notes: 'Normal heart rate'
    },
  ];

  // Create new health metrics
  const createdHealthMetrics = await HealthMetric.create(healthMetrics);
  console.log('Health Metrics: ', createdHealthMetrics);

} catch (err) {
  console.error(err);
} finally {
  // Close the connection to the database
  await mongoose.connection.close();
}
