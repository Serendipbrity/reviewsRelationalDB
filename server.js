const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');

// we need this to deploy to the server so it can use the port that heroku gives us
const PORT = process.env.PORT || 3001;
const app = express();
// build tables based on models
const models = require('./models');

// to access the public folder
app.use(express.static('public'));

// set up handlebars
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// necessary for post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

// connect to database and then run server. force true to reset db every time server starts
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    })
});
