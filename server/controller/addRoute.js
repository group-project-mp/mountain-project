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
    }
}