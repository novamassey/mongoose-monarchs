const express= require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');

//GET '/' index
router.get('/posts', postsCtrl.index);

//GET '/posts/:id' show
router.get('/posts/:id', postsCtrl.show)

//GET 'posts/new' new
router.get('/posts/new', postsCtrl.new);

//POST 'posts' create
router.post('/posts', postsCtrl.create);

//GET 'posts/new' new


//POST  "posts:id/comments"

module.exports = router;