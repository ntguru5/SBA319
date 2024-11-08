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
    {
      name: 'Max',
      breed: 'German Shepherd',
      age: 5,
      weight: 35,
      ownerId: 'owner321'
    },
    {
      name: 'Luna',
      breed: 'Labrador',
      age: 4,
      weight: 28,
      ownerId: 'owner654'
    },
    {
      name: 'Daisy',
      breed: 'Beagle',
      age: 6,
      weight: 20,
      ownerId: 'owner987'
    },
    {
      name: 'Rocky',
      breed: 'Bulldog',
      age: 8,
      weight: 25,
      ownerId: 'owner567'
    },
    {
      name: 'Charlie',
      breed: 'Boxer',
      age: 7,
      weight: 27,
      ownerId: 'owner432'
    }
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
    {
      dogId: createdDogs[3]._id,
      type: 'poop',
      time: new Date('2024-11-03T06:30:00'),
      location: 'park',
      notes: 'Small, firm stool'
    },
    {
      dogId: createdDogs[4]._id,
      type: 'pee',
      time: new Date('2024-11-04T10:15:00'),
      location: 'backyard',
      notes: 'Quick pee'
    },
    {
      dogId: createdDogs[5]._id,
      type: 'poop',
      time: new Date('2024-11-04T11:45:00'),
      location: 'home',
      notes: 'Loose stool'
    }
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
    {
      dogId: createdDogs[3]._id,
      metricType: 'weight',
      value: 36.2,
      time: new Date('2024-11-05T08:00:00'),
      notes: 'Minor weight gain'
    },
    {
      dogId: createdDogs[4]._id,
      metricType: 'temperature',
      value: 100.8,
      time: new Date('2024-11-06T12:30:00'),
      notes: 'Normal temperature'
    },
    {
      dogId: createdDogs[5]._id,
      metricType: 'heart rate',
      value: 115,
      time: new Date('2024-11-06T14:30:00'),
      notes: 'Slightly high heart rate post-exercise'
    }
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
