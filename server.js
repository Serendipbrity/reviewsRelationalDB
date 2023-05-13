const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(controllers);

// connect to database and then run server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    })
});
