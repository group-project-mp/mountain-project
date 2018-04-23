SELECT max(slot_1) as slot_1, max(slot_2) as slot_2, max(slot_3) as slot_3, max(slot_4) as slot_4, slot_5, min(slot_6) as slot_6, count(route_id) as count, avg(latitude) as latitude, avg(longitude) as longitude
    FROM routes
JOIN locations ON routes.id = locations.route_id
WHERE slot_4 = $1
GROUP BY slot_5