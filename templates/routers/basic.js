const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<NAME> route');
});

module.exports = router;
