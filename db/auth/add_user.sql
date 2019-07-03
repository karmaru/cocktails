insert into users
(name, email, password, avatar)
values (${name},${email}, ${password}, ${avatar})
returning email, user_id;