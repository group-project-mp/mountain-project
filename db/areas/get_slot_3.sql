SELECT  slot_3, count(route_id) as count
FROM locations
WHERE slot_2 = $1
GROUP BY  slot_3