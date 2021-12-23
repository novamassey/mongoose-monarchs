var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');




//GET "users/:id" show
router.get('/users/:id', usersCtrl.show)

//GET  "users/:id/edit" edit
router.get('/users/:id/edit', usersCtrl.edit)

//PUT  'users/:id' update
router.put('/users/:id', usersCtrl.update)

//GET 'users' index
router.get('/users', usersCtrl.index)

module.exports = router;
