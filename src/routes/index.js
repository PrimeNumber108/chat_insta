const express = require('express');
const router = express.Router();
const testRoute = require('./testRoute');
const webhookRoute = require('./webhookRoute');

router.use('/test', testRoute);
router.use('/webhook', webhookRoute);

module.exports = router;
