const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/signup', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/me', protect, getUserProfile);

module.exports = router; 