require('dotenv').config();
const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , path = require('path');

const { CONNECTION_STRING, SERVER_PORT } = process.env;

const controller = require('./controller/controller');

//users
app.get('/getuserinfo', controller.getUserInfo)

app.use(bodyParser.json());
app.use(cors());

app.post('/api/test', controller.add)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => { console.log(`Server listening on port ${SERVER_PORT}`) })
});