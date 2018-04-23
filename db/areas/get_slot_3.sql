SELECT max(slot_1) as slot_1, max(slot_2) as slot_2, slot_3, min(slot_4) as slot_4, count(route_id) as count, avg(latitude) as latitude, avg(longitude) as longitude
    FROM routes
JOIN locations ON routes.id = locations.route_id
WHERE slot_2 = $1
GROUP BY slot_3