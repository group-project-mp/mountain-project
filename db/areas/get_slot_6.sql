SELECT  slot_6, count(route_id) as count
FROM locations
WHERE slot_5 = $1
GROUP BY  slot_6