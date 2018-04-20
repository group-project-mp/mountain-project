SELECT * from routes 
where ordered_rating BETWEEN $1 AND $2
AND stars >= $3
AND pitches >= $4
AND type = $5
ORDER BY ordered_rating