SELECT
    id, name, stars, star_votes, slot_1, slot_2, rating
FROM
    routes
JOIN locations on routes.id = locations.route_id
WHERE stars > 4.5
ORDER BY 
    star_votes DESC,
    stars DESC
LIMIT 20
