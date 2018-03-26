const router = require('express').Router();

router.use('/api/spotify', require('./spotify/index'));

module.exports = router;