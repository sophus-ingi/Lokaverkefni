const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
const submit01 = 'takk fyrir';

    res.render('submit', { title: 'submit', submit01  });
});
module.exports = router;