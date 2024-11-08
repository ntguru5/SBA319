# Pet Health Tracker App

## Description
The **Pet Health Tracker App** is a comprehensive Node.js, Express, and MongoDB server application designed to help pet owners manage their pet's health data. This app provides functionality for tracking and recording various pet health metrics, including bathroom activities, health metrics (such as weight and temperature), and veterinarian visit logs.

## Features
- **CRUD Operations** for managing pet data.
- **RESTful API** to create, read, update, and delete data.
- **Modular and Scalable** code structure.
- **Easy Database Seeding** for initial data setup.

## Technologies Used
- **Node.js** for server-side JavaScript runtime.
- **Express.js** for building RESTful web services.
- **MongoDB** as the database, with **Mongoose** for object data modeling.
- **dotenv** for environment variable management.

## Installation

1. **Clone the repository**:
  ```
   git clone https://github.com/your-username/pet-health-tracker.git
  ```
2. **Navigate into the project directory**:
  ```
  cd pet-health-tracker
  ```
3.  **Install dependencies**:
  ```
  npm install
  ```
4. **Configure environment variables: Create a `.env` file and add your MongoDB connection string**:
  ```env
  ATLAS_URI=your-mongodb-connection-string
  ```
5. **Run the server**:
  ```
  npm start
  ```
## API Endpoints

### Dogs API
- **GET /dogs**
  - Description: Retrieve all dogs
  - Response: JSON array of dog objects

- **POST /dogs**
  - Description: Create a new dog
  - Request Body:
    ```json
    {
      "name": "Sparky",
      "age": 16,
      "breed": "Chihuahua"
    }
    ```
  - Response: Created dog object

- **PATCH /dogs/:id**
  - Description: Update a specific dog's information by ID
  - Request Body:
    ```json
    {
      "name": "Buddy",
      "age": 5
    }
    ```
  - Response: Updated dog object

- **DELETE /dogs/:id**
  - Description: Delete a dog by ID
  - Response: Confirmation message

### Health Metrics API
- **GET /health-metrics**
  - Description: Retrieve all health metrics
  - Response: JSON array of health metric objects

- **POST /health-metrics**
  - Description: Create new health metrics
  - Request Body:
    ```json
    {
      "dogId": "60d21b4667d0d8992e610c85",
      "weight": 30,
      "temperature": 101.5,
      "date": "2024-11-01"
    }
    ```
  - Response: Created health metrics object

- **PATCH /health-metrics/:id**
  - Description: Update specific health metrics by ID
  - Request Body:
    ```json
    {
      "weight": 32
    }
    ```
  - Response: Updated health metrics object

- **DELETE /health-metrics/:id**
  - Description: Delete health metrics by ID
  - Response: Confirmation message

### Bathroom Logs API
- **GET /bathroom-logs**
  - Description: Retrieve all bathroom logs
  - Response: JSON array of bathroom log objects

- **POST /bathroom-logs**
  - Description: Create a new bathroom log
  - Request Body:
    ```json
    {
      "dogId": "60d21b4667d0d8992e610c85",
      "type": "pee",
      "time": "2024-11-02T08:30:00Z"
    }
    ```
  - Response: Created bathroom log object

- **PATCH /bathroom-logs/:id**
  - Description: Update a specific bathroom log by ID
  - Request Body:
    ```json
    {
      "type": "poop"
    }
    ```
  - Response: Updated bathroom log object

- **DELETE /bathroom-logs/:id**
  - Description: Delete a bathroom log by ID
  - Response: Confirmation message
## Data Seeding
You can seed the database with sample data using the provided script:
```
node config/seed.js
```
## Future Enhancements
- Add user authentication for secured access.
- Include more detailed analytics for pet health tracking.
- Implement notification features for vet visit reminders.
