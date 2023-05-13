const router = require('express').Router();
const users = require('./users');

// localhost:3001/
router.use('/users', users);
 
module.exports = router;