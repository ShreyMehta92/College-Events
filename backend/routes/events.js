const express = require('express');
const { allevents, addevents, updateevents, deleteevents} = require('../controllers/eventRoutes'); 

const router = express.Router();

router.get('/events', allevents);
router.post('/events', addevents);
router.put('/events/:id', updateevents);
router.delete('/events/:id', deleteevents);

module.exports = router; 