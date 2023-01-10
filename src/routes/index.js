const express = require('express');
const router = express.Router();
const user = require('./User');
const auth = require('./Auth');

router.use('/api/user', user);
router.use('/api/auth', auth);

module.exports = router