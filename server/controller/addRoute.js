module.exports = {
    distinct2: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.gets.slot2_distinct([id]).then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
    },
    distinct3: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.gets.slot3_distinct([id]).then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
    },
    distinct4: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.gets.slot4_distinct([id]).then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
    },
    distinct5: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.gets.slot5_distinct([id]).then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
    },
    distinct6: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.gets.slot3_distinct([id]).then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
    },
    submit: (req, res) => {
        const db = req.app.get('db');
        const { name, difficulty, type, image, latitude, longitude, pitches, protection, rating, location, description } = req.body;
        db.adds.add_new([image, latitude, longitude, name, pitches, difficulty, rating, type, protection, description, location[0], location[1], location[2], location[3], location[4], location[5]])
            .then(response => res.status(200).send('Success'))
            .catch(err => console.log(err))
    }
}

    