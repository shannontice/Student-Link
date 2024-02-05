const router = require('express').Router();

const User = require('../models/User');
const Post = require('../models/Post')

function protect(req, res, next) {
    if (req.session.user_id) {
        return next();
    }

    res.redirect('/login')
}

async function attachUser(req, res, next) {
    const user = await User.findByPk(req.session.user_id);

    req.user = user && user.get({plain: true});

    next();
}


// Show the homepage 
router.get('/', attachUser, async (req, res) => { 
    res.render('home', {
        title: 'Student Link',
        home: true,
        user: req.user
    })
});

// Show the register form page 
router.get('/register', (req, res) => {
    res.render('forms/register_form', {
        title: 'Register',
        register: true
    })
});

// Show the login form page
router.get('/login', (req, res) => {
    res.render('forms/login_form', {
        title: 'Login',
        login: true
    })
});

router.get('/dashboard', protect, attachUser, (req, res) => {
    res.render('forms/allPosts', {
        title: 'Dashboard',
        dashboard: true,
        user: req.user
    })
});

// Show the post form page
router.get('/create/post', (req, res) => {
    res.render('forms/post_form', {
        title: 'Create a Post'
    })
});

// Show the user a list of the post they created (userdata)
router.get('/userdata', async (req, res) => {
    const user = await User.findByPk(req.session.user_id, {
        include: {
            model: Post,
            attributes: [
                'id',
                'subject',
                'subjet_level',
                'topic',
                'post_text',
                [fn('date-format', col('release_date'), '%m/%d/%Y'), 'formatted_date']
            ]
        }
    });

    res.render('userdata', {
        user: user.get({ plain: true }),
    })
})

// Logout route
router.get('/logout', (req, res) => {
    // Clear the user ID from the session to log them out
    req.session.destroy();
    res.redirect('/');
  });
  


module.exports = router;