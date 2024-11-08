import express from 'express';
const router = express.Router();
import HealthMetric from '../models/HealthMetric.js';

// GET health metrics for a specific dog
router.get('/:dogId', async (req, res) => {
  try {
    const metrics = await HealthMetric.find({ dogId: req.params.dogId });
    res.json(metrics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a new health metric
router.post('/', async (req, res) => {
  const metric = new HealthMetric(req.body);
  try {
    const newMetric = await metric.save();
    res.status(201).json(newMetric);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH update health metric by ID
router.patch('/:id', async (req, res) => {
  try {
    const updatedMetric = await HealthMetric.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMetric);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE health metric by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedMetric = await HealthMetric.findByIdAndDelete(req.params.id);

    // Check if the metric was found and deleted
    if (!deletedMetric) {
      return res.status(404).json({ message: 'Health metric not found' });
    }

    res.json({ message: 'Health metric deleted successfully' });
  } catch (err) {
    console.error('Error deleting health metric:', err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
