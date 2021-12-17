const express= require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');

//GET '/' index
router.get('/', postsCtrl.index);

//GET 'posts/new' new
router.get('/new', postsCtrl.new);

module.exports = router;