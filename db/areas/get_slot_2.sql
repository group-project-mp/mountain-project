SELECT  slot_2, count(route_id) as count
FROM locations
WHERE slot_1 = $1
GROUP BY  slot_2