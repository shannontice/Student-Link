// routes/user_routes.js
const router = require('express').Router();
const validator = require('validator');
const User = require('../models/User');
const Post = require('../models/Post');

// GET ALL Users
router.get('/users', async (req, res) => {
  try{
      const users = await User.findAll()

      res.send(users)


  } catch (err) {
      console.log(err)
  }
});

// GET single User by ID
router.get('/user/:id', async (req, res) => {
const user_id = req.params.id

  try{
      const user = await User.findOne({
          where: {
              id: user_id
          },
      })

      if (user) {
          return res.send(user)
        }
        res.send({
          error: 404,
          message: 'User not found with that ID'
        })

  } catch (err) {
      console.log(err)
  }
});

// POST route to add a user
router.post('/user', async (req, res) => {
  const userData = req.body


  try{
      const user = await User.create(userData)


      res.json({
        message: 'User added successfully!',
        user
    })


  } catch (err){

    const messages = err.errors.map(eObj => eObj.message);

    return res.json({
        error: 401,
        message: messages
    })
  }
})

// GET route to get user and associated posts
router.get('/users/studyposts', async (req, res) => {
  const user_id = req.query.user_id;
  try{
    const user = await User.findOne({
      where: {
        id: user_id
      }, 
      include: Post
    });

    if (user) {
    return res.json(user);
    }
  }
  catch (err) {
    console.log(err);
  }
})

// DELETE a Study-Post
router.delete('/users/:id', async (req, res) => {
  const user_id = req.params.id

  try{
      await User.destroy({
          where: {
              id: user_id
          },
      })

      res.send({
          message: 'User has been deleted!'
      })

  } catch (err) {
      console.log(err)
  }
})
module.exports = router;
