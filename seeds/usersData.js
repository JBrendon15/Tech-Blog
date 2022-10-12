const { User } = require('../models');

const usersData = [
    {
        username: 'Test',
        password: '12345'
    },
    {
        username: 'Test2',
        password: '123456'
    },
]

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;