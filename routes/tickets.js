const express = require('express');
const Ticket = require('../models/Ticket');
const router = express.Router();

// Purchase a ticket
router.post('/', async (req, res) => {
  const newTicket = new Ticket(req.body);
  try {
    await newTicket.save();
    res.status(201).json(newTicket);
  } 
  catch (error)
  {
    res.status(400).json({ error: error.message });
  }
});

// Get tickets for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const tickets = await Ticket.find({ userId: req.params.userId }).populate('eventId');
    res.status(200).json(tickets);
  }
  catch (error)
  {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
