const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
const lan01 = 'lan';

    res.render('lan', { title: 'lan', lan01  });
});
module.exports = router;