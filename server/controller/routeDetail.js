module.exports = {
    routeDetail: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.gets.route_detail([id]).then(route => {
            res.status(200).send(route[0])
        }).catch(err => res.status(500).send('Could not retrieve route'))
    },
    getSimilar: (req, res) => {
        const db = req.app.get('db');
        db.gets.get_similar([req.params.id]).then(areas => {
            res.status(200).send(areas)
        }).catch(err => res.status(500).send(areas))
    },
    comments: (req, res) => {
        const db = req.app.get('db');
        db.gets.get_comments([req.params.id]).then(response => {
            res.status(200).send(response);
        }).catch(err => res.status(500).send(err))
    },
    addTick: (req, res) => {
        const id = req.user.user_id
        const db = req.app.get('db');
        const { style, date, pitches, notes, leadStyle, difficulty } = req.body;
        db.adds.add_tick([id, req.params.route, notes, date, style, leadStyle, difficulty]).then(response => {
            res.status(200).send('Successfully added Tick')
        }).catch(err => res.status(500).send(err));
    },
    addTodo: (req, res) => {
        const id = req.user.user_id
        const db = req.app.get('db');
        db.adds.add_todo([req.params.route, id]).then(response => {
            res.status(200).send('Success');
        })
            .catch(err => res.send(err));
    },
    addComment: (req, res) => {
        const db = req.app.get('db');
        const { comment } = req.body;
        db.adds.add_comment([req.user.user_id, comment, req.params.route]).then(response => {
            res.status(200).send({ user_name: req.user.user_name, comment: comment, date: response[0].date })
        }).catch(err => res.status(500).send(err))
    },
    topTwenty: (req, res) => {
        const db = req.app.get('db');
        db.gets.top_20().then(routes => {
            res.status(200).send(routes)
        }).catch(err => res.status(500).send(err))
    },
    addPhoto: (req, res) => {
        const db = req.app.get('db');
        db.adds.add_photo([req.params.id, req.body.url]).then(response => {
            res.status(200).send('Success')
        }).catch(err => res.status(500).send('Error adding Photo'))
    },
    getPhotos: (req, res) => {
        const db = req.app.get('db');
        db.gets.get_photos([req.params.id]).then(photos => {
            res.status(200).send(photos)
        }).catch(err => res.status(500).send(err))
    }
}