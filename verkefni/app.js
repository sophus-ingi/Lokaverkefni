const express = require('express');
const path = require('path');
const session = require('express-session');
require('colors');
const frontPage = require('./routes/');
const loginPage = require('./routes/login');
const eventsPage = require('./routes/events');
const contactsPage = require('./routes/contacts');
const pajamaPage = require('./routes/pajama');
const gamePage = require('./routes/game');
const lanPage = require('./routes/lan');
const movienightPage = require('./routes/movienight');
const submitPage = require('./routes/submit');


const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// for body parser, leyfir req.body
app.use(express.urlencoded({ extended: false }));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routers
app.use('/', frontPage);
app.use('/login', loginPage);
app.use('/events', eventsPage);
app.use('/contacts', contactsPage);
app.use('/pajama', pajamaPage);
app.use('/game', gamePage);
app.use('/lan', lanPage);
app.use('/movienight', movienightPage);
app.use('/submit', submitPage);





// errors : page not found
app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});

// handling errors
app.use((err, req, res) => {
    res.status(err.status || 500);
    res.send(err.message);
});

// setting up the server
app.listen(3000, () => {
    console.log('Server is running on port 3000.....'.green);
});