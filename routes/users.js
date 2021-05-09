var express = require('express');
var router = express.Router();
const {signin, signup} = require('../controllers/users.js')

/* GET users listing. */
router.post('/signin', signin)
router.post('/signup', signup)


module.exports = router;
