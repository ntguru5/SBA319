import express from 'express';
const router = express.Router();
import BathroomLog from '../models/BathroomLog.js';

// GET all bathroom logs for a specific dog
router.get('/:dogId', async (req, res) => {
  try {
    const logs = await BathroomLog.find({ dogId: req.params.dogId });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a new bathroom log
router.post('/', async (req, res) => {
  const log = new BathroomLog(req.body);
  try {
    const newLog = await log.save();
    res.status(201).json(newLog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a bathroom log by ID
router.delete('/:id', async (req, res) => {
  try {
    await BathroomLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bathroom log deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
