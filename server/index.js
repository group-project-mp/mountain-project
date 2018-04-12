require('dotenv').config();
const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , path = require('path'),
     controller = require('./controller/controller');

const { 
    REACT_APP_SUCCESS,
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL
 } = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);

    


    app.use(bodyParser.json());
    app.use(cors());
    app.use(session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    }))
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new Auth0Strategy({
        domain: DOMAIN,
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: CALLBACK_URL
    }))

    

    //users
    app.get('/getuserinfo', controller.getUserInfo)
    app.get('/getticks', controller.getTicks)
    app.get('/gettodos', controller.getTodos)
    app.delete('/deletetodo/:id', controller.deleteTodo)

    //mp api data access
    app.post('/api/test', controller.add)

    app.get('/api/slot2/:id', controller.distinct2)

    app.listen(SERVER_PORT, () => { console.log(`Server listening on port ${SERVER_PORT}`) })
});