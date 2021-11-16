const express = require('express');
const router = express.Router();

require('dotenv').config();

const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
	host: 'smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: process.env.EMAIL_USERNAME,
		pass: process.env.EMAIL_PASSWORD
	}
});

const mailOptions = {
    from: 'vfor3jq05@gmail.com',
    to: 'hjorvaringiharaldsson@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transport.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
    console.log('Email sent: ' + info.response);
    }
});

router.get('/', (req, res) => {
	const contacts01 = 'Contact us'
    const contacts02 = 'First Name'
    const contacts03 = 'Last Name'
    const contacts04 = 'Country'
    const contacts05 = 'Iceland'
    const contacts06 = 'Australia'
    const contacts07 = 'USA'
    const contacts08 = 'Other'
    const contacts09 = 'Subject'

    res.render('contacts', { title: 'contacts', contacts01, contacts02, contacts03, contacts04, contacts05, contacts06, contacts07, contacts08, contacts09  });
});
module.exports = router;