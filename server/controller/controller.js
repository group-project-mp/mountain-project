

var routes = [
    {
        id: 105748391,
        name: "Calypso",
        type: "Trad",
        rating: "5.6",
        stars: 4,
        starVotes: 779,
        pitches: 3,
        location: [
            "Colorado",
            "Boulder",
            "Eldorado Canyon SP",
            "The Wind Tower",
            "Wind Tower - SW Face"
        ],
        imgMedium: "https:\/\/cdn-files.apstatic.com\/climb\/105935643_medium_1494061717.jpg",
        longitude: -105.2829,
        latitude: 39.9318
    },
    {
        id: 105749956,
        name: "Free Willie",
        type: "Sport",
        rating: "5.11a",
        stars: 4.1,
        starVotes: 504,
        pitches: 1,
        location: [
            "Colorado",
            "Boulder",
            "Boulder Canyon",
            "Animal World"
        ],
        imgMedium: "https:\/\/cdn-files.apstatic.com\/climb\/105840070_medium_1494052841.jpg",
        longitude: -105.4155,
        latitude: 39.9973
    },
    {
        id: 105750454,
        name: "North Face",
        type: "Trad",
        rating: "5.6 R",
        stars: 4.4,
        starVotes: 149,
        pitches: 5,
        location: [
            "Colorado",
            "Boulder",
            "Flatirons",
            "South",
            "The Maiden"
        ],
        imgMedium: "https:\/\/cdn-files.apstatic.com\/climb\/107342922_medium_1494182976.jpg",
        longitude: -105.2872,
        latitude: 39.95
    }
];


const axios = require('axios')

module.exports = {
    add: (req, res) => {
        const db = req.app.get('db');
        axios.get('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=42.078&lon=-113.724&maxResults=500&maxDistance=25&minDiff=5.6&maxDiff=5.15&key=107710868-83b40f4d964852ae1674deb85b4e6a00')
            .then(response => {
                response.data.routes.map(e => db.ADDS.add_route(e.imgMedium, e.latitude, e.longitude, e.name, e.pitches, e.rating, e.starVotes, e.stars, e.type, e.id, e.location[0], e.location[1], e.location[2], e.location[3], e.location[4], e.location[5])
                    .then(response => {
                        res.status(200).send('added route')
                    })
                    .catch(err => console.log(err))
                )
            })
    },
    getStates: (req, res) => {
        const db = req.app.get('db');
        db.gets.state_and_count().then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send('Error'))
    },
    slot_2: (req, res) => {
        const db = req.app.get('db');
        const { slot_1 } = req.query;
        db.gets.slot_2([slot_1]).then(slot_2 => {
            res.status(200).send(slot_2)
        }).catch(err => res.status(500).send('Error'))
    },
    getUserInfo: (req, res, next) => {
        const id = req.user.user_id
        const db = req.app.get('db');
        db.user.get_user_info(id)
        .then( user => res.status(200).send( user ))
        .catch( () => res.status(500).send());
    },
    getTicks: (req, res, next) => {
        const id = req.user.user_id
        const db = req.app.get('db');
        db.user.get_ticks(id)
        .then( ticks => res.status(200).send( ticks ))
        .catch( () => res.status(500).send());
    },
    getTodos: (req, res, next) => {
        const db = req.app.get('db');
        const id = req.user.user_id
        // arr will by req.user.todos probably
        db.user.get_todos(id)
        .then( todos => res.status(200).send( todos ))
        .catch( () => res.status(500).send());
    },
    deleteTodo: (req, res, next) => {
        const userId = req.user.user_id
        const routeId = req.params.id
        const db = req.app.get('db');
        db.user.delete_todo(userId, routeId)
        .then((todos)=> res.status(200).send(todos))
        .catch(() => res.status(500).send())
    },
    distinct2: (req, res) => {
        const db = req.app.get('db');
        routes.map(e => db.adds.add_route(e.imgMedium, e.latitude, e.longitude, e.name, e.pitches, e.rating, e.star_votes, e.stars, e.type, e.location[0], e.location[1], e.location[2], e.location[3], e.location[4], e.location[5]).then(() => {
            res.status(200).send('added route')
            .catch(err => console.log(err) )
        }))
        console.log('hit')
    }
}
        const { id } = req.params;
        db.gets.slot2_distinct(id).then(response => {
            res.status(200).send(response)
        }).catch(res.status(500).send('Error'))
     }
}
