insert into users(image, first_name, last_name, email, username, password, city, bio, social_media)
values (${image}, ${firstname}, ${lastname}, ${email}, ${username}, ${password}, ${city}, ${bio}, ${socialmedia})
    returning *
;
