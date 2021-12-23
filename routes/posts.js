const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const isLoggedIn = require('../config/auth');

//GET '/' index
router.get('/posts', postsCtrl.index);

//GET 'posts/new' new
router.get('/posts/new', isLoggedIn, postsCtrl.new);

//GET '/posts/:id' show
router.get('/posts/:id', postsCtrl.show)

//POST 'posts' create
router.post('/posts', postsCtrl.create);

//DELETE 'posts/:id' delete
router.delete('/posts/:id', postsCtrl.delete)




module.exports = router;