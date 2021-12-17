const express= require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');

//GET '/posts' index
router.get('/posts', postsCtrl.index);

//GET 'posts/new' new

module.exports = router;