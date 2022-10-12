const router = require('express').Router();
const { Post } = require('../../models/')

router.get('/', async (req, res) => {
    res.render('./layouts/dashboard')
})

module.exports = router;