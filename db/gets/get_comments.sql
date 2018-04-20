SELECT comment, date, user_name FROM comments
FULL JOIN users on comments.user_id = users.user_id
WHERE route_id = $1