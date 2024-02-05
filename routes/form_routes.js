const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');


// POST- Create a User Route
router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);

        req.session.user_id = user.id;

        res.redirect('/dashboard');
    }
    catch (err) {
        const messages = err.errors.map(eObj => eObj.message);

        req.session.errors = messages;

        console.log(err);

        res.redirect('/register')
    }
});

// POST- Login User Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        })

        // User is not found
        if (!user) {
            req.session.errors = ['A user with that email address does not exist'];

             return res.redirect('/register');

        }

        // Validate their password
        const valid_pass = await user.validatePass(password);

        if(!valid_pass) {
            req.session.errors = ['Password is invalid'];

            return res.redirect('/login');
        }

        req.session.user_id= user.id;

        res.redirect('/dashboard')


    }
    catch (err) {
        const messages = err.errors.map(eObj => eObj.message);

        req.session.errors = messages;

        console.log(err);

        res.redirect('/login')
    }
});

// POST- Add A Post Route
router.post('/create/post', async (requestObj, responseObj) => {
    try {
        await Post.create(requestObj.body)

        responseObj.redirect('/?post_added=true');
    }
    catch (err) {
        console.log(err)
        responseObj.redirect('/create/post')
    }
});

module.exports = router;