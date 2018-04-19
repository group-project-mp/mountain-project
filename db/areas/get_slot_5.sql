SELECT  slot_5, count(route_id) as count
FROM locations
WHERE slot_4 = $1
GROUP BY  slot_5