
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


module.exports = {
    add: (req, res) => {
        const db = req.app.get('db');
        routes.map(e => db.adds.add_route(e.imgMedium, e.latitude, e.longitude, e.name, e.pitches, e.rating, e.starVotes, e.stars, e.type, e.id, e.location[0], e.location[1], e.location[2], e.location[3], e.location[4], e.location[5])
            .then(response => {
                res.status(200).send('added route')
            })
            .catch(err => console.log(err))
        )
    }
}
