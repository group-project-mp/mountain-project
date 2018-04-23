delete from routes where id not in (select min(id) 
from routes group by mp_id)


-- for locations
-- delete from description where id not in (select min(id)
-- from description group by location)