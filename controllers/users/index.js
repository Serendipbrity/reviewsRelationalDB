const router = require('express').Router();
const { User } = require('../../models');
// localhost:3001/users
router.get('/', (req, res) => { 
    res.json('From the users folder');
 });

// write a post request to create a user
// use async await because table does not instantly update with userData.
// so wait until user is created before sending response 

// localhost:3001/users/sign-up
router.post('/sign-up', async (req, res) => { 
    const { username, password, email } = req.body;
    // create a user
    const userData = await User.create({
        username: username,
        password: password,
        email: email
    }); 
    res.json(userData);
});
 

module.exports = router;