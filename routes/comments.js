var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');

//POST  'posts/:id/comments'  create
router.post('/posts/:id/comments', commentsCtrl.create)

//DELETE 'comments/:id' delete
router.delete('comments/:id', commentsCtrl.delete)

module.exports = router;