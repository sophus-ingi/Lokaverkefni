const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
const pajama01 = 'hallo';

    res.render('pajama', { title: 'pajama', pajama01  });
});
module.exports = router;