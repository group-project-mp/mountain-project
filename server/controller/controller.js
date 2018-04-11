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
        db.get_user_info(id)
        .then( user => res.status(200).send( user ))
        .catch( () => res.status(500).send());
    }
}
