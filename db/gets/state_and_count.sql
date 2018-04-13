SELECT slot_1 AS state, count(slot_1)
FROM locations
GROUP BY slot_1
ORDER BY slot_1