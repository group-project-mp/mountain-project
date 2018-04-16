module.exports = {
    routeDetail: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.gets.route_detail([id]).then(route => {
            res.status(200).send(route[0])
        }).catch(err => res.status(500).send('Could not retrieve route'))
    }
}