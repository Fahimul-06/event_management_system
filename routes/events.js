const express = require('express');
const Event = require('../models/Event');
const router = express.Router();


router.post('/', async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    await newEvent.save();
    res.status(201).json(newEvent);
  }
  catch (error)
  {
    res.status(400).json({ error: error.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  }
  catch (error)
  {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
