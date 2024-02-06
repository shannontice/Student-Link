const express = require('express');
const { engine } = require('express-handlebars')
const session = require('express-session')
const db = require('./db/connection')

const PORT = process.env.PORT || 3011;

const app = express();

// const user_routes = require('./routes/user_routes');
const studypost_routes = require('./routes/studypost_routes');
const view_routes = require('./routes/view_routes');
const form_routes = require('./routes/form_routes');

// Open middleware channels
app.use(express.json());

app.use(express.urlencoded({ extended: false }))

// Share public files
app.use(express.static('./public'))


// Handlebar name extentioncheckout main
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

// Initialize Sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: { maxAge: 60 * 60 * 1000}
}));

// Load routes here
app.use('/api', [studypost_routes])
app.use('/', [view_routes, form_routes])

db.sync({ force: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server Port:', PORT)
        })
    })
