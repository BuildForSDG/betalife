const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello v2 GET API from betalife');
});

router.post('/', (req, res) => {
  res.send('Hello v2 POST API from betalife');
});

module.exports = router;
