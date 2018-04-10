require('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive'),
    bodyParser = require('body-parser'),
    controller = require('./controller/controller')

    const  {
        CONNECTION_STRING,
        SECRET,
        SERVER_PORT
    } = process.env

    massive(CONNECTION_STRING).then(db => {
        app.set('db', db);
    })

    const app = express();

    app.use(bodyParser.json())
    
    app.post('/api/test', controller.add)

    app.listen(SERVER_PORT, () => { console.log(`Server listening on port ${SERVER_PORT}`) });