CREATE TABLE IF NOT EXISTS routes (
 id SERIAL PRIMARY KEY, 
 imgMedium TEXT, 
 latitude DECIMAL, 
 longitude DECIMAL,  
 name TEXT, 
 pitches INTEGER, 
 rating TEXT, 
 star_votes INTEGER, 
 stars DECIMAL, 
 type TEXT
)