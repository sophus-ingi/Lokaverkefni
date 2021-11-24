const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/');
    }else{
        const header01 = "";
		
        const text01 = "Log in";
        res.render('login', { title: 'login', header01, text01 });
    }
});

// get login page
router.post('/', (req, res) => {
	const adminUser = "sophus";
	const adminPassword = "sophus";
	const user = req.body.user;
	const password = req.body.password;
	
	if (adminUser === user && adminPassword === password){
		req.session.loggedIn = true;
		req.session.username = user;
		res.redirect('/');
	} else {
		console.log('NOTANDI EKKI TIL');
		res.redirect('/login');
	}
});

module.exports = router;
