const router = require('express').Router();
const {User} = require('../../models');

router.get('/', (req, res) => { 
    res.render('reviews');
});
 
// we dont know how long it will take to get the data from the database so we use async
router.get('/dashboard/:user_id', async (req, res) => { 
    // find by primary key
    const userData = await User.findByPk(req.params.user_id, {
        attributes: { exclude: ['password'] }
    });
    console.log('sequelize data : ', userData);

    const actualUserData = userData.get({ plain: true });
    console.log('actual data : ', actualUserData);
    // pass data to handlebars to display it
    res.render('dashboard', actualUserData);
 })

module.exports = router;