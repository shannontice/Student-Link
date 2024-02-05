const router = require('express').Router()
const { getAllPosts, getPostByID, getPostBySub, createNewPost, deletePost } = require('../controllers/studypost_controller');


// GET ALL Study-Posts
router.get('/studypost', getAllPosts);

// GET Study-Post by ID
router.get('/studypost/:id', getPostByID);

// GET Study-Post by Subject
router.get('/studypost/:subject', getPostBySub);

// POST a Study-Post
router.post('/create/studypost', createNewPost)

// DELETE a Study-Post
router.delete('/studypost/:id', deletePost)

module.exports = router;