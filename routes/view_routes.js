const router = require('express').Router();

const User = require('../models/User');
const Post = require('../models/Post');
const { attachUser, goToHomepage, registerForm, goToDashboard, postForm, usersPosts, logOut, loginForm, getUsers } = require('../controllers/view_controller');

function protect(req, res, next) {
    if (req.session.user_id) {
        return next();
    }

    res.redirect('/login')
}

// Show the homepage 
router.get('/', attachUser, goToHomepage);

// Show the register form page 
router.get('/register', registerForm);

// Show the login form page
router.get('/login', loginForm);

router.get('/dashboard', protect, attachUser, goToDashboard);

// Show the post form page
router.get('/create/post', attachUser, postForm);

// Show the user a list of the post they created (userdata)
router.get('/userdata', attachUser,  usersPosts);

// Show the user other users post
router.get('/userprofile/:username', attachUser,  getUsers);

// Logout route
router.get('/logout', logOut);
  


module.exports = router;