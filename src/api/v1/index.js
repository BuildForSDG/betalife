const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello v1 GET API from betalife');
});

router.post('/', (req, res) => {
  res.send('Hello v1 POST API from betalife');
});

module.exports = router;
