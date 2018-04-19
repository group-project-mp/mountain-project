SELECT slot_4, min(slot_5) as slot_5, count(route_id) as count, avg(latitude) as latitude, avg(longitude) as longitude
    FROM routes
JOIN locations ON routes.id = locations.route_id
WHERE slot_3 = $1
GROUP BY slot_4