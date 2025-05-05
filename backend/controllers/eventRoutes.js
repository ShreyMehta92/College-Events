const jwt = require('jsonwebtoken');
const Events = require('../models/events')

const allevents = async (req, res) => {
    try {
        const events = await Events.find().sort({ date: -1 });
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const addevents = async (req, res) => {
    const events = new Events({
        title: req.body.title,
        total_duration : req.body.total_duration,
        Category: req.body.Category
    });
    
    try {
        const newEvent = await events.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateevents = async(req,res) => {
    try {
        const updatedevents = await Events.findByIdAndUpdate(
          req.params.id,
          {
            title: req.body.title,
            total_duration : req.body.total_duration,
            Category: req.body.Category
          },
          { new: true }
        );
        res.json(updatedevents);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}
const deleteevents = async (req, res) => {
    try {
        await Events.findByIdAndDelete(req.params.id);
        res.json({ message: 'Event deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { allevents, addevents, deleteevents, updateevents }; 