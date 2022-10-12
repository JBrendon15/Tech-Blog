const router = require('express').Router();
const dashboardRoutes = require('./dashboard');
const { Post, User } = require('../models')

router.use('/dashboard', dashboardRoutes);

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                { model: User }
            ]
        });
        const posts = postData.map((data) =>
            data.get({ plain: true })
        );
        // res.status(200).json(allPosts);
        console.log(posts);
        res.render('all-posts', {
            posts,
        });
    }
    catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;