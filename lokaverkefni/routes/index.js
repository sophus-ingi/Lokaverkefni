const express = require('express');
const router = express.Router();


// get studioTemplate page
router.get('/', (req, res) => {
	if (req.session.loggedIn){
		const username = req.session.username;
		const header01 = ` ${username} `;
		const header02 = 'Velkominn';
		const text01 = '';
		res.render('index', { title: 'Forsíðan', header01, header02, text01 });
	} else {
		const header01 = '';
		const header02 = 'Velkominn';
		const text01 = 'Login';
		res.render('index', { title: 'Forsíðan', header01, header02, text01 });
	}

});

module.exports = router;

