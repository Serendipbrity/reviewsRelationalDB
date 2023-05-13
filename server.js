const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
// build tables based on models
const models = require('./models');
app.use(controllers);

// connect to database and then run server. force true to reset db every time server starts
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    })
});
