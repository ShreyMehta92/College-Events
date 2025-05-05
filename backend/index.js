const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API is running' });
});
  
// Routes
app.use('/api/auth', authRoutes);
app.use('/api', eventRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  }); 

