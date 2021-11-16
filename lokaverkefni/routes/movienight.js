const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
const movie01 = 'movienight';

    res.render('movienight', { title: 'movienight', movie01  });
});
module.exports = router;