const router = require('express').Router();

router.use('/api/session', require('./session/index'));

module.exports = router;