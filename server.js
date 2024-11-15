const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');
const ticketRoutes = require('./routes/tickets');

const app = express();
const port = 3001;

// Connect to MongoDB (update the URI with your database credentials)
mongoose.connect('mongodb://localhost:27017/event_management', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

//const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/mydatabase', {
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
//});


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
