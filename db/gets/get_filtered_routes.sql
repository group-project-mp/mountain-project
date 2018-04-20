SELECT
    name, stars, type, rating, slot_1, slot_2, slot_3, slot_4, slot_5, slot_6
FROM routes
JOIN locations ON routes.id = locations.route_id
where ordered_rating BETWEEN $1 AND $2
AND stars >= $3
AND pitches >= $4
AND type = $5
ORDER BY ordered_rating