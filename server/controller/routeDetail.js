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
        .catch(err => res.status(500).send(err));
    }
}