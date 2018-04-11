delete from routes where id not in (select min(id) 
from routes group by mp_id)