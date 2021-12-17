const express= require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');

//GET '/' index
router.get('/', postsCtrl.index);

//GET 'posts/new' new

module.exports = router;