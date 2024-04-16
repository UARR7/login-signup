const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // for password hashing

const app = express();
const PORT = 3000; // Choose any available port

// Middleware for parsing JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

// Create User model
const Userchan = mongoose.model('User', userSchema);

// Route to handle user registration
app.post('/register', async (req, res) => {
  try {
    // Check if the email is already registered
    const existingUser = await Userchan.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user instance
    const user = new Userchan({
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name
    });

    // Save the user to the database
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
