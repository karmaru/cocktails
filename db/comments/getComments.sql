select a.*, b.name, b.avatar from posts a
inner join users b on a.user_id = b.user_id 
where a.drink_id = ${id};

-- select * from posts
-- where drink_id = ${id};