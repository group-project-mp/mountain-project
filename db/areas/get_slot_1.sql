SELECT  slot_1, count(route_id) as count
FROM locations
GROUP BY  slot_1
ORDER BY slot_1 ASC 





-- SELECT  slot_1, slot_2, count(route_id) as count
-- FROM locations
-- GROUP BY  slot_1, slot_2
-- ORDER BY slot_1, slot_2 ASC 