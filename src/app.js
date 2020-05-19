const express = require('express');

const app = express();
const db = require('./database/models');
const api = require('./api');

app.use('/api', api);

app.listen(3000, () => {
  db.sequelize.sync();
});
