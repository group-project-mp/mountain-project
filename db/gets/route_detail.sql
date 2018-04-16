SELECT
    id, image, latitude, longitude, name, pitches, rating, star_votes, stars, type, protection, description, slot_1, slot_2, slot_3, slot_4, slot_5, slot_6
FROM routes
JOIN locations ON routes.id = locations.route_id
WHERE id = $1