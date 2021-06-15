var express = require('express');
var router = express.Router();
const {signin, signup, updateInfo} = require('../controllers/users.js')

// const auth = require('../middlewares/auth')
const uploader =  require('../controllers/upload.js')
// const upload = require('../middlewares/mutter')
/* GET users listing. */
router.post('/signin', signin)
router.post('/signup', signup)
router.post('/update', updateInfo)
router.post('/upload', uploader)



module.exports = router;
