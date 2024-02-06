const User = require('../models/User')

const userData = [
    {
        username: 'Freddy',
        email: 'freddy@test.com',
        password: 12345678
    },
    {
        username: 'Shannon',
        email: 'shannon@test.com',
        password: 12345678
    },
    {
        username: 'Ray',
        email: 'ray@test.com',
        password: 12345678
    },
    {
        username: 'Sean',
        email: 'sean@test.com',
        password: 12345678
    },
    {
        username: 'Emily',
        email: 'emily@test.com',
        password: 12345678
    },
]

// Function to create multiple 'Users' above in database
const seedUsers = function() {
    return User.bulkCreate(userData)
}

module.exports = seedUsers