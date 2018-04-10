CREATE TABLE IF NOT EXISTS ticks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    route_id INTEGER,
    notes VARCHAR(200),
    date DATE,
    style TEXT,
    lead_option TEXT
)