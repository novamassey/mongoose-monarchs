var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//GET "users/:id" show
router.get('/:id', usersCtrl.show)

//GET  "users/:id/edit" edit
router.get('/users/:id/edit', usersCtrl.edit)

//PUT  'users/:id' update
router.put('/:id',usersCtrl.update)

module.exports = router;
