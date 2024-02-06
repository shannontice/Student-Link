const Post = require('../models/Post')

const studyPostData = [
    {
        subject: 'Math',
        subject_level: 'Novice',
        title: 'Algebra I',
        post_text: 'Notes: https://example.com/fake-document.pdf',
        meeting_info: 'Check my Zoom Schedule: https://zoomfakeurl.com/meetingID123',
        userId: 1
    },
    {
        subject: 'English',
        subject_level: 'Beginner',
        title: 'Citing Sources',
        post_text: 'Notes: https://example.com/fake-document.pdf',
        meeting_info: 'Join my discord study group: https://discord.gg/DiscordServer',
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
        subject_level: 'Advanced',
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
        meeting_info: 'Join my discord study group: https://discord.gg/DiscordServer',
        userId: 1
    },
    {
        subject: 'Computer Science',
        subject_level: 'Advanced',
        title: 'JavaScript',
        post_text: `
        Notes: https://example.com/fake-document.pdf
        Code: https://example.com/fake-document.pdf
        `,
        userId: 5
    },
    {
        subject: 'Foreign Language',
        subject_level: 'Beginner',
        title: 'Ordering Food in Spanish',
        post_text: 'Cheat Sheet: https://example.com/fake-document.pdf',
        meeting_info: 'Join my discord study group: https://discord.gg/DiscordServer',
        userId: 1
    },
    {
        subject: 'Science',
        subject_level: 'Advanced',
        title: 'Enviormental Impact of Trees',
        post_text: `
        Notes: https://example.com/fake-document.pdf
        Testing: https://example.com/fake-document.pdf
        `,
        userId: 2
    },
    
    
]

// Function to create multiple 'Users' above in database
const seedStudyPosts = function() {
    return Post.bulkCreate(studyPostData)
}

module.exports = seedStudyPosts