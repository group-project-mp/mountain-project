SELECT slot_2, count(slot_2)
from locations
where slot_1 = $1
group by slot_2