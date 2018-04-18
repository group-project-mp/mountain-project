SELECT  slot_4, count(route_id) as count
FROM locations
WHERE slot_3 = $1
GROUP BY  slot_4