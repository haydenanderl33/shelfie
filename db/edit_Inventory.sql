UPDATE shelfie
SET product_name = $2,
image = $3,
price = $4
WHERE id = $1
RETURNING *;

-- UPDATE shelfie
-- SET product_name = "hikes",
-- price = 3009,
-- image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDzQXdNvyqBWM3su5MRlvsout2fqj53wO2A&usqp=CAU"
-- WHERE id = 113
-- RETURNING *;