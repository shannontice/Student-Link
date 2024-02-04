const Post = require('../models/Post')

const studyPostData = [
    {
        subject: 'Math',
        subject_level: 'Novice',
        topic: 'Algebra I',
        post_text: 'Notes: https://example.com/fake-document.pdf'
    },
    {
        subject: 'English',
        subject_level: 'Beginner',
        topic: 'Citing Sources',
        post_text: 'Notes: https://example.com/fake-document.pdf'

    },
    {
        subject: 'Science',
        subject_level: 'Advanced',
        topic: 'Dark Matter',
        post_text: 'Notes: https://example.com/fake-document.pdf'
    },
    {
        subject: 'History',
        subject_level: 'Advanced',
        topic: 'Byzantine Empire Collapse',
        post_text: 'Notes: https://example.com/fake-document.pdf'
    },
    {
        subject: 'Computer Science',
        subject_level: 'Novice',
        topic: 'HTML/ CSS',
        post_text: 'Notes: https://example.com/fake-document.pdf'
    },
    {
        subject: 'Foreign Language',
        subject_level: 'Expert',
        topic: 'Legal Document Terms in French',
        post_text: 'Notes: https://example.com/fake-document.pdf'
    },
    
]

// Function to create multiple 'Users' above in database
const seedStudyPosts = function() {
    return Post.bulkCreate(studyPostData)
}

module.exports = seedStudyPosts