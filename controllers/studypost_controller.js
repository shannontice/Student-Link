const User = require('../models/User');
const Post = require('../models/Post')

module.exports = {
    async getAllPosts(req, res) {
        try {
            const studyPost = await Post.findAll({
                // Include User ID?
                include: {
                    model: User,
                    attributes: {
                        exclude: ['password', 'createdAt', 'upodatedAt']
                    }
                }
            })

            res.send(studyPost)

        } catch (err) {
            console.log(err)
        }
    },
    async getPostByID(req, res) {
        const studyPost_id = req.params.id

        try {
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
    },

    async getPostBySub(req, res) {
        const studyPost_subject = req.params.subject

        try {
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
    },

    async createNewPost(req, res) {
        const studyPostData = req.body
    
        try{
            const newStudyPost = await Post.create(studyPostData)
    
            res.send(newStudyPost)
    
    
        } catch (err){
    
            console.log(err)
        }
    
    },

    async deletePost(req, res) {
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
    }

}