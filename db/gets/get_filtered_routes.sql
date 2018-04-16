SELECT * from routes 
where rating BETWEEN $1 AND $2
AND stars >= $3
AND pitches >= $4
AND type = $5