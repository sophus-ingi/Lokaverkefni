const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
const game01 = 'gamenight';

    res.render('game', { title: 'game', game01  });
});
module.exports = router;