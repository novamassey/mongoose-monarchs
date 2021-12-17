const express= require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');

//GET '/' index
router.get('/', postsCtrl.index);

//GET 'posts/new' new
router.get('/new', postsCtrl.new);

//POST 'posts' create
router.post('/', postsCtrl.create);

module.exports = router;