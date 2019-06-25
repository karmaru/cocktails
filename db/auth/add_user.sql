insert into users
(name, email, password)
values (${name},${email}, ${password})
returning email, user_id;