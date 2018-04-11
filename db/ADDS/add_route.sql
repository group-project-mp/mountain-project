WITH ins as (
   INSERT INTO routes
       (image, latitude, longitude, name, pitches, rating, star_votes, stars, type)
   VALUES
       ( $1, $2, $3, $4, $5, $6, $7, $8, $9 )
   RETURNING name, id )
INSERT INTO locations (slot_1, slot_2, slot_3, slot_4, slot_5, slot_6, route_name, route_id )
   SELECT $10, $11, $12, $13, $14, $15, name, id FROM ins;

