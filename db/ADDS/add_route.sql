WITH ins as (
   INSERT INTO routes
       (imgMedium, latitude, longitutde, name, pitches, rating, star_votes, stars, type)
   VALUES
       ( $1, $2, $3, $4, $5, $6, $7, $8, $9 )
   RETURNING name, route_id )
INSERT INTO locations (slot_1, slot_2, slot_3, slot_4, slot_5, slot_6, route_name, route_id )
   SELECT $10, $11, $12, $13, $14, $15, route_name, route_id FROM ins;