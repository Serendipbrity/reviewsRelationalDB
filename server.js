const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})