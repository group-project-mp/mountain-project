SELECT
    id,  name, pitches, rating, stars, type
FROM routes
JOIN locations ON routes.id = locations.route_id
WHERE slot_3 = $1 OR slot_4 = $1 OR slot_5 = $1 OR slot_6 = $1
LIMIT 10