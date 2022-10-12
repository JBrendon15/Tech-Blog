const { Comment } = require('../models');

const commentsData = [
    {
       body: 'This is a comment',
       userId: 2,
       postId: 1,
    },
    {
        body: 'This is another comment',
        userId: 1,
        postId: 2,
    },
]

const seedComments = () => Comment.bulkCreate(commentsData);
module.exports = seedComments;