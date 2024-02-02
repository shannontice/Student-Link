// routes/user_routes.js
const router = require('express').Router()
const { User } = require('../models/User');

// Middleware for user authentication
const authenticateUser = async (req, res, next) => {
  try {
    const userId = req.session.userId;
    const user = await User.findByPk(userId);

    if (user) {
      req.user = user;
      next();
    } else {
      res.redirect('/users/login');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// User registration route
router.get('/register', (req, res) => {
  res.render('register'); 
});

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate inputs
    if (!username || !password) {
      return res.status(400).send('Username and password are required');
    }

    // Check if the username is already taken
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).send('Username already taken');
    }

    // Create a new user in the database using Sequelize
    const newUser = await User.create({ username, password });

    // Redirect to the login page
    res.redirect('/users/login');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate inputs
    if (!username || !password) {
      return res.status(400).send('Username and password are required');
    }

    // Check user credentials in the database using Sequelize
    const user = await User.findOne({ where: { username, password } });

    if (user) {
      // Store the user ID in the session to keep track of the logged-in user
      req.session.userId = user.id;

      // Redirect to the main page or another relevant route
      res.redirect('/');
    } else {
      // Display an error message or redirect back to the login page
      res.redirect('/users/login');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Logout route
router.get('/logout', (req, res) => {
  // Clear the user ID from the session to log them out
  req.session.userId = null;
  res.redirect('/');
});

module.exports = router;
