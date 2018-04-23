SELECT max(slot_1) as slot_1, max(slot_2) as slot_2, max(slot_3) as slot_3, max(slot_4) as slot_4, max(slot_5) as slot_5, slot_6, count(route_id) as count, avg(latitude) as latitude, avg(longitude) as longitude
    FROM routes
JOIN locations ON routes.id = locations.route_id
WHERE slot_5 = $1
GROUP BY slot_6