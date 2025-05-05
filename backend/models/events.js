const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    total_duration: { type: Number, required: true },
    Category: { type: String, required: true },
    date: { type: Date, default: Date.now }
  });
  
const Events = mongoose.model('Events', eventsSchema);
module.exports = Events; 