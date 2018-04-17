SELECT name, stars, rating FROM routes
JOIN locations on locations.route_id = routes.id
WHERE 
    slot_3 = $1 
    OR slot_4 = $1
    OR slot_5 = $1
    OR slot_6 = $1