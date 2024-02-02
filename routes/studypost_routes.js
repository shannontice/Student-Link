const router = require('express').Router()
const { Post } = require('../models')

// GET ALL Study-Posts
router.get('/', async (req, res) => {
    try{
        const studyPost = await Post.findAll({
            // Include User ID?
        })

        res.send(studyPost)

    } catch (err) {
        console.log(err)
    }
});

// GET Study-Post by ID
router.get('/:id', async (req, res) => {
const studyPost_id = req.params.id

    try{
        const studyPost = await Post.findOne({
            where: {
                id: studyPost_id
            }
        })

        res.send(studyPost)

    } catch (err) {
        console.log(err)
    }
});
// POST a Study-Post

// DELETE a Study-Post