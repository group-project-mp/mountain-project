SELECT slot_5, min(slot_6) as slot_6, count(route_id) as count, avg(latitude) as latitude, avg(longitude) as longitude
    FROM routes
JOIN locations ON routes.id = locations.route_id
WHERE slot_4 = $1
GROUP BY slot_5