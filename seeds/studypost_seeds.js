const Post = require('../models/Post')

const studyPostData = [
    {
        subject: 'Math',
        subject_level: 'Novice',
        title: 'Algebra I',
        post_text: 'Notes: https://example.com/fake-document.pdf',
        meeting_info: 'Join our Zoom meeting: https://zoomfakeurl.com/meetingID123',
        userId: 1
    },
    {
        subject: 'English',
        subject_level: 'Beginner',
        title: 'Citing Sources',
        post_text: 'Notes: https://example.com/fake-document.pdf',
        meeting_info: 'Join our Zoom meeting: https://zoomfakeurl.com/meetingID123',
        userId: 2

    },
    {
        subject: 'Science',
        subject_level: 'Advanced',
        title: 'Dark Matter',
        post_text: `
        Notes: https://example.com/fake-document.pdf
        Diagram: https://example.com/fake-document.pdf
        `,
        userId: 3
    },
    {
        subject: 'History',
        subject_level: 'Advanced',
        title: 'Byzantine Empire Collapse',
        post_text: 'Notes: https://example.com/fake-document.pdf',
        userId: 4
    },
    {
        subject: 'Computer Science',
        subject_level: 'Novice',
        title: 'HTML/ CSS',
        post_text: `
        Notes: https://example.com/fake-document.pdf
        Code: https://example.com/fake-document.pdf
        `,
        userId: 5
    },
    {
        subject: 'Foreign Language',
        subject_level: 'Expert',
        title: 'Legal Document Terms in French',
        post_text: 'Notes: https://example.com/fake-document.pdf',
        meeting_info: 'Join our Zoom meeting: https://zoomfakeurl.com/meetingID123',
        userId: 1
    },
    
]

// Function to create multiple 'Users' above in database
const seedStudyPosts = function() {
    return Post.bulkCreate(studyPostData)
}

module.exports = seedStudyPosts