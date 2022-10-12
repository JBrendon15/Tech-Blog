const { Post } = require('../models/');

const postsData = [
    {
        title: 'test',
        body: 'This is a test',
        userId: 1,
    },
    {
        title: 'test2',
        body: 'This is the second test',
        userId: 2,
    },
]

const seedPosts = () => Post.bulkCreate(postsData);
module.exports = seedPosts;