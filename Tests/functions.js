const axios = require('axios');

module.exports = {
    get20: () => {
        return axios.get('/api/20')
            .then(res => res.data)
    },
    routeDetail: (id) => {
        return axios.get(`/api/route/${4303}`)
            .then(res => res.data)
    }
}
