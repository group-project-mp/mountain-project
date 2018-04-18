const axios = require('axios')

module.exports = {

    add: (req, res) => {
        const db = req.app.get('db');
        axios.get('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=39.277&lon=-111.174&maxResults=200&maxDistance=25&minDiff=V0&maxDiff=V12&key=107710868-83b40f4d964852ae1674deb85b4e6a00')
            .then(response => {
                response.data.routes.map(e => db.adds.add_route(e.imgMedium, e.latitude, e.longitude, e.name, e.pitches, e.rating, e.starVotes, e.stars, e.type, e.id, e.location[0], e.location[1], e.location[2], e.location[3], e.location[4], e.location[5])
                    .then(response => {
                        res.status(200).send('added route')
                    })
                    .catch(err => console.log(err))
                )
            }
            )},
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
       const { id } = req.params;
       db.gets.slot2_distinct(id).then(response => {
           res.status(200).send(response)
       }).catch(res.status(500).send('Error'))

    },
    filter: (req, res) => {
        const db = req.app.get('db');
        db.gets.get_filtered_routes().then(response => {
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
        const { id } = req.params;
        db.gets.slot2_distinct(id).then(response => {
            res.status(200).send(response)
        }).catch(res.status(500).send('Error'))
     },
     getSlot1: (req, res, next) => {
         const db = req.app.get('db');
         db.areas.get_slot_1()
         .then((areas) =>  res.status(200).send(areas))
         .catch(() => res.status(500).send())
     },
     getSlot2: (req, res, next) => {
         const db = req.app.get('db');
        //  console.log(req.params)
         db.areas.get_slot_2(req.params.area)
         .then((areas) =>  res.status(200).send(areas))
         .catch(() => res.status(500).send())
     },
     getSlot3: (req, res, next) => {
         const db = req.app.get('db');
        //  console.log(req.params)
         db.areas.get_slot_3(req.params.area)
         .then((areas) =>  res.status(200).send(areas))
         .catch(() => res.status(500).send())
     },
     getSlot4: (req, res, next) => {
         const db = req.app.get('db');
        //  console.log(req.params)
         db.areas.get_slot_4(req.params.area)
         .then((areas) =>  res.status(200).send(areas))
         .catch(() => res.status(500).send())
     },
     getSlot5: (req, res, next) => {
         const db = req.app.get('db');
        //  console.log(req.params)
         db.areas.get_slot_5(req.params.area)
         .then((areas) =>  res.status(200).send(areas))
         .catch(() => res.status(500).send())
     },
     getSlot6: (req, res, next) => {
         const db = req.app.get('db');
        //  console.log(req.params)
         db.areas.get_slot_6(req.params.area)
         .then((areas) =>  res.status(200).send(areas))
         .catch(() => res.status(500).send())
     },
     getFinalAreaRoutes: (req, res, next) => {
         const db = req.app.get('db');
         db.areas.get_final_area_routes(req.params.area)
         .then((areas) =>  res.status(200).send(areas))
         .catch(() => res.status(500).send())
     },
     getDescription: (req, res, next) => {
         const db = req.app.get('db');
         db.areas.get_description(req.params.area)
         .then((areas) =>  res.status(200).send(areas))
         .catch(() => res.status(500).send())
     }
}
