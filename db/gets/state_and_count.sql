SELECT slot_1 AS area, count(slot_1)
FROM locations
GROUP BY slot_1
ORDER BY slot_1