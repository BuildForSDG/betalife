
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Hello v2 GET API from betalife');
});

router.post('/', (req, res, next) => {
  res.send('Hello v2 POST API from betalife');
});

module.exports = router;
