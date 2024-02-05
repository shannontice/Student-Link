// routes/user_routes.js
const router = require('express').Router();
const { getAllUsers, getUserByID, createUser, getUserPosts, deleteUser } = require('../controllers/user_controller');

// GET ALL Users
router.get('/users', getAllUsers);

// GET single User by ID
router.get('/user/:id', getUserByID);

// POST route to add a user
router.post('/user', createUser);

// GET route to get user and associated posts
router.get('/users/studyposts', getUserPosts);

// DELETE a User
router.delete('/users/:id', deleteUser)

module.exports = router;
