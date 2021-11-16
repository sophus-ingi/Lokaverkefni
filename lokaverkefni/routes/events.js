const express = require('express');
const router = express.Router();

// get studioTemplate page
router.get('/', (req, res) => {
	const texti01 = 'Events happining soon'
	const title01 = 'Náttfatardagur';
	const saga01 = '28. Janúar';
	const saga02 = 'Smelltu hér fyrir fleiru upplýsingar';
	
	const title02 = 'Spilakvöld'
	const saga03 = '15. Febrúar'

	const title03 = 'Lankvöld'
	const saga04 = '5. Mars'

	const title04 = 'Kvikmyndakvöld'
	const saga05 = '30. Mars'
	
	res.render('events', { title: 'events', saga01, saga02, title01, texti01, title02, saga03, title03, title04, saga04, saga05, });

});

module.exports = router;
