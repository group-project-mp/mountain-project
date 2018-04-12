const axios = require('axios')

module.exports = {
    add: (req, res) => {
        const db = req.app.get('db');
        const routes = []
        axios.get('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=37.744&lon=-119.599&maxResults=500&maxDistance=25&minDiff=5.6&maxDiff=5.10&key=107710868-83b40f4d964852ae1674deb85b4e6a00')
            .then(response => {
                response.data.routes.map(e => db.ADDS.add_route(e.imgMedium, e.latitude, e.longitude, e.name, e.pitches, e.rating, e.starVotes, e.stars, e.type, e.id, e.location[0], e.location[1], e.location[2], e.location[3], e.location[4], e.location[5])
                    .then(response => {
                        res.status(200).send('added route')
                    })
                    .catch(err => console.log(err))
                )
            })
    },
    getUserInfo: (req, res, next) => {
        const id = 1
        const db = req.app.get('db');
        db.user.get_user_info(id)
        .then( user => res.status(200).send( user ))
        .catch( () => res.status(500).send());
    },
    getTicks: (req, res, next) => {
        const id = 1
        const db = req.app.get('db');
        db.user.get_ticks(id)
        .then( ticks => res.status(200).send( ticks ))
        .catch( () => res.status(500).send());
    },
    getTodos: (req, res, next) => {
        const db = req.app.get('db');
        const id = 1
        // arr will by req.user.todos probably
        db.user.get_todos(id)
        .then( todos => res.status(200).send( todos ))
        .catch( () => res.status(500).send());
    },
    deleteTodo: (req, res, next) => {
        const userId = 1
        const routeId = req.params.id
        const db = req.app.get('db');
        db.user.delete_todo(userId, routeId)
        .then((todos)=> res.status(200).send(todos))
        .catch(() => res.status(500).send())
    }


}
