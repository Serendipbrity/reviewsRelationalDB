const express = require('express');
const routes = require('./controllers');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})