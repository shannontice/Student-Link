const router = require('express').Router();
const { createUser, userLogin, createPost } = require('../controllers/form_controller');


// POST- Create a User Route
router.post('/register', createUser);

// POST- Login User Route
router.post('/login', userLogin);

// POST- Add A Post Route
router.post('/create/post', createPost);

module.exports = router;