const User = require('../models/User');
const Post = require('../models/Post')

module.exports = {
    async createUser (req, res) {
        try {
            const user = await User.create(req.body);
    
            req.session.user_id = user.id;
    
            res.redirect('/dashboard');
        }
        catch (err) {
            let messages;
          
            messages = [err.message]
            if (err.errors) {
                messages = err.errors.map(eObj => eObj.message); 
            }
    
            req.session.errors = messages;
    
            console.log(err);
    
            res.redirect('/register')
        }
    },

    async userLogin (req, res) {
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
            let messages;
            console.log(err);
            messages = [err.message]
            if (err.errors) {
                messages = err.errors.map(eObj => eObj.message); 
            }
            
    
            req.session.errors = messages;
    
            console.log(err);
    
            res.redirect('/login')
        }
    }, 

    async createPost (req, res) {
        try {
            await Post.create(req.body)
    
            res.redirect('/?post_added=true');
        }
        catch (err) {
            console.log(err)
            res.redirect('/create/post')
        }
    }
}
