SELECT  slot_1, count(route_id) as count
FROM locations
GROUP BY  slot_1