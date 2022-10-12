const router = require('express').Router();
const { Post } = require('../../models/')

router.get('/', async (req, res) => {
    res.render('./layouts/dashboard')
})

router.get('/new', async (req, res) => {
    res.render('new-post')
})
module.exports = router;