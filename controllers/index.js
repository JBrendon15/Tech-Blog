const router = require('express').Router();
const dashboardRoutes = require('./dashboard');
const { Post, User, Comment } = require('../models');

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
        res.render('all-posts', {
            posts,
        });
    }
    catch (err) {
        res.status(400).json(err);
    }
});

router.get('/signup', async (req, res) => {
    res.render('signup')
});

router.get('/login', async (req, res) => {
    res.render('login')
});

router.get('/post/:id', async (req, res) => {
    try{
        const post = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: [
                        'id',
                        'body',
                        'created_at',
                        'postId',
                        'userId',
                    ],
                    include: [
                        {
                            model: User,
                            attributes: [
                                'username',
                            ],
                        },
                    ],
                    
                },
                {
                    model: User,
                    attributes: [
                        'username'
                    ]
                } 
            ]
        })
        console.log(post)
        res.render('single-post', {
            post,
        })
    }
    catch(err) {
        res.status(400).json(err);
    }
})

module.exports = router;