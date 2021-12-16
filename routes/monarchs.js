const express= require('express');
const router = express.Router();
const monarchsCtrl = require('../controllers/monarchs');

//all paths begin wit'/monarchs

//GET '/monarchs/posts' index
router.get('monarch/posts', monarchsCtrl.index);

module.exports = router;