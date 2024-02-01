const exp = require('constants');
const express = require('express');
const {engine} = require('express-handlebars')

const PORT = 3011

const app = express();

const user_routes = require('./routes/user_routes')
const studypost_routes = require('./routes/studypost_routes')
const view_routes = require('./routes/view_routes')
const form_routes = require('./routes/form_routes')

// Handlebar name extention
app.engine('hbs', engine({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');



// Load routes here
app.use('/', [view_routes, form_routes])

db.sync({force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server Port:', PORT)
        })
    })
