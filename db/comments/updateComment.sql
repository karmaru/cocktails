update posts
set 
    comment = ${comment}
 where post_id = ${id};

select * from posts;