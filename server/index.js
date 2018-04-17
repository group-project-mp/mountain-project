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

const controller = require('./controller/controller');
const addController = require('./controller/addRoute');
const routeDetail = require('./controller/routeDetail');

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);

    app.use(bodyParser.json());
    app.use(cors());

    //auth 0
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
    }, function (accessToken, refreshToken, extraParams, profile, done) {
        const db = app.get('db')
        db.user.find_user([profile.id]).then(users => {
            if (!users[0]) {
                db.user.create_user([profile.id, profile.name.givenName]).then(userCreated => {
                    done(null, userCreated[0])
                })
            } else {
                done(null, users[0].user_id)
            }
        })
    }))

    passport.serializeUser((id, done) => {
        done(null, id)
    })
    
    passport.deserializeUser((id, done) => {
        app.get('db').user.find_session_user([id]).then(user => {
            done(null, user[0])
        })
    })
    
    app.get('/auth', passport.authenticate('auth0'));
    app.get('/auth/callback', passport.authenticate('auth0', {
        successRedirect: REACT_APP_SUCCESS,
        failureRedirect: 'http://localhost:3000/#/',
    }))
    
    app.get('/auth/me', (req, res) => {
        if (req.user) {
            res.status(200).send(req.user)
        } else {
            res.status(401).send('didnt work')
        }
    })
    
    app.get('/auth/logout', (req, res) => {
        req.logOut();
        res.redirect('/')
    })

    

//===== ENDPOINTS =====//
//users
app.get('/getuserinfo', controller.getUserInfo)
app.get('/getticks', controller.getTicks)
app.get('/gettodos', controller.getTodos)
app.delete('/deletetodo/:id', controller.deleteTodo)

//mp api data access

//routes
app.post('/api/test', controller.add)
app.get('/api/stateCount', controller.getStates);
app.get('/api/area', controller.slot_2);

app.get('/api/slot2/:id', addController.distinct2);
app.get(`/api/slot3/:id`, addController.distinct3);
app.get(`/api/slot4/:id`, addController.distinct4);
app.get(`/api/slot5/:id`, addController.distinct5);
app.get(`/api/slot6/:id`, addController.distinct6);
app.post('/api/newRoute', addController.submit);
app.get('/api/route/:id', routeDetail.routeDetail);


    app.listen(SERVER_PORT, () => { console.log(`Server listening on port ${SERVER_PORT}`) })
});