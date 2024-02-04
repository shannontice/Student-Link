const router = require('express').Router()
const Post = require('../models/Post')


// GET ALL Study-Posts
router.get('/studypost/', async (req, res) => {
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
router.get('/studypost/:id', async (req, res) => {
const studyPost_id = req.params.id

    try{
        const studyPost = await Post.findOne({
            where: {
                id: studyPost_id
            },
            // Include User ID?
        })

        if (studyPost) {
            return res.send(studyPost)
          }
          res.send({
            error: 404,
            message: 'Post not found'
          })

    } catch (err) {
        console.log(err)
    }
});

// GET Study-Post by Subject
router.get('/studypost/:subject', async (req, res) => {
    const studyPost_subject = req.params.subject
    
        try{
            const studyPost = await Post.findOne({
                where: {
                    subject: studyPost_subject
                },
                // Include User ID?
            })
    
            if (studyPost) {
                return res.send(studyPost)
              }
              res.send({
                error: 404,
                message: 'Subject not found'
              })
    
        } catch (err) {
            console.log(err)
        }
    });

// POST a Study-Post
router.post('/studypost', async (req, res) => {
    const studyPostData = req.body

    console.log(studyPostData)

    try{
        const newStudyPost = await Post.create(studyPostData)

        res.send(newStudyPost)


    } catch (err){

        console.log(err)
    }

})

// DELETE a Study-Post
router.delete('/studypost/:id', async (req, res) => {
    const studyPost_id = req.params.id

    try{
        await Post.destroy({
            where: {
                id: studyPost_id
            },
        })

        res.send({
            message: 'Post has been deleted!'
        })

    } catch (err) {
        console.log(err)
    }
})

module.exports = router;