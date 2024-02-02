const router = require('express').Router();

const User= require('../models/User');
const Post= require('../models/Post')



// Show the homepage 
Router.get('/', async (req, res) => {
    res.render('home', {
        title: 'Student Link'
    })
});