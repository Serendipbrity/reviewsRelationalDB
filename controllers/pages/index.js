const router = require('express').Router();

router.get('/', (req, res) => { 
    res.render('reviews');
 });

module.exports = router;